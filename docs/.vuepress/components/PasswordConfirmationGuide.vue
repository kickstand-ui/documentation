<template>
    <ks-form id="confirm_password_form">
        <ks-form-field
            id="username"
            label="Username"
            required>
        </ks-form-field>
        <ks-form-field
            id="password"
            label="Password"
            type="password"
            help-text="Must be at least 8 characters and include 1 special character"
            minlength="8"
            pattern="^.*(?=.*[a-zA-Z])(?=.*[!#$%&?]).*$"
            pattern-error-message="You are missing a special character"
            required>
        </ks-form-field>
        <ks-form-field
            id="confirm_password"
            label="Confirm Password"
            type="password"
            required>
        </ks-form-field>
        <ks-button type="submit">Submit</ks-button>
    </ks-form>

</template>
<script>
export default {
    async mounted() {
        const { $ } = await import("kickstand-ui");
        const $passwordForm = $('#confirm_password_form');

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
