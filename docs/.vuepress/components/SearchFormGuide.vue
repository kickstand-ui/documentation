<template></template>
<script>
import { $ } from "kickstand-ui";

export default {
    mounted() {
        const $searchModal = $("#search_1_modal");
        const $searchContent = $searchModal.find("#search_1_data");
        $("#search_1").on("submitted", (event) => {
            $searchContent.innerText = JSON.stringify(event.detail, null, 2);
            $searchModal.show();
        });

        function getFilteredNames(search) {
            const names = [
                "Michael Scott",
                "Jim Halpert",
                "Pam Halpert",
                "Dwight Schrute",
                "Jan Levinson",
                "Angela Martin",
                "Ryan Howard",
            ];
            return !search
                ? names
                : names.filter((name) => name.includes(search));
        }

        function setResults(id, results) {
            $(`#${id}`).innerHTML = results
                .map((result) => `<tr><td>${result}</td></tr>`)
                .join("");
        }

        setResults("search_2_results", getFilteredNames());
        $("#search_2").on("submitted", (event) => {
            let formData = event.detail;
            let names = getFilteredNames(formData.formFieldData[0].value);
            setResults("search_2_results", names);
        });

        setResults("search_3_results", getFilteredNames());
        $("#search_3").on("updated", (event) => {
            let fieldData = event.detail;
            let names = getFilteredNames(fieldData.value);
            setResults("search_3_results", names);
        });

        setResults("search_4_results", getFilteredNames());
        $("#search_4").on("updated", (event) => {
            let fieldData = event.detail;
            let names = getFilteredNames(fieldData.value);
            setResults("search_4_results", names);
        });
    },
};
</script>
