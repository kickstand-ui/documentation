<template></template>
<script>
export default {
    async mounted() {
        const kickstand = await import("kickstand-ui");

        kickstand.$("#contact_form").on("submitted", (event) => {
            console.log("CONTACT FORM DATA", event.detail);
        });
    },
};
</script>
