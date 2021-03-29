<template></template>
<script>

export default {
    async mounted() {
        const kickstand = await import("kickstand-ui");
        const $passwordForm = kickstand.$('#confirm_password_form');

        $passwordForm.on('submitted', (event) => {
            const formData = event.detail;

            if(!formData.isValid)
                return;

            const passwordFieldData = formData.formFieldData.find(x => x.name === 'password')
            const confirmPasswordFieldData = formData.formFieldData.find(x => x.name === 'confirm-password');

            if(passwordFieldData.value === confirmPasswordFieldData.value) {
                $passwordForm.invalid = false;
                const username = formData.formFieldData.find(x => x.name === 'username');
                alert(`Welcome to the app, ${username.value}!`);
            } else {
                $passwordForm.invalid = true;
                const $confirmPasswordField = $('#confirm_password');
                $confirmPasswordField.defaultErrorMessage = 'Your passwords do not match';
                $confirmPasswordField.invalid = true;
            }
        });
    },
};
</script>
