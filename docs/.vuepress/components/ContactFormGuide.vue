<template>
    
</template>
<script>
    export default {
        mounted() {
            const contactForm = document.querySelector('#contact_form');
            contactForm.addEventListener('submitted', (event) => {
                console.log('CONTACT FORM DATA', event.detail);
            });
        }
    }
</script>
