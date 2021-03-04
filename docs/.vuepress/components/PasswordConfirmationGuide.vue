<template></template>
<script>
export default {
    mounted() {
        const confirmPasswordForm = document.querySelector('#confirm_password_form');

        confirmPasswordForm.addEventListener('submitted', (event) => {
            const formData = event.detail;

            if(!formData.isValid)
                return;

            const password = formData.formFieldData.find(x => x.name === 'password')
            const confirmPassword = formData.formFieldData.find(x => x.name === 'confirm-password');

            if(password.value === confirmPassword.value) {
                confirmPasswordForm.invalid = false;
                const username = formData.formFieldData.find(x => x.name === 'username');
                alert(`Welcome to the app, ${username.value}!`);
            } else {
                confirmPasswordForm.invalid = true;
                const confirmPasswordField = document.querySelector('#confirm_password');
                confirmPasswordField.defaultErrorMessage = 'Your passwords do not match';
                confirmPasswordField.invalid = true;
            }
        });
    },
};
</script>
