<template></template>
<script>
import { $ } from "kickstand-ui";

export default {
    mounted() {
        $("#contact_form").on("submitted", (event) => {
            console.log("CONTACT FORM DATA", event.detail);
        });
    },
};
</script>
