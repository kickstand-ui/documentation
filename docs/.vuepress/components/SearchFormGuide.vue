<template></template>
<script>
export default {
    mounted() {
        const searchForm = document.querySelector("#search_1");
        const searchModal = document.querySelector("#search_1_modal");
        const searchContent = searchModal.querySelector("#search_1_data");
        searchForm.addEventListener("submitted", (event) => {
            searchContent.innerText = JSON.stringify(event.detail, null, 2);
            searchModal.show();
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
            const tableResults = document.querySelector(`#${id}`);
            tableResults.innerHTML = results
                .map((result) => `<tr><td>${result}</td></tr>`)
                .join("");
        }

        const search2 = document.querySelector("#search_2");
        setResults("search_2_results", getFilteredNames());
        search2.addEventListener("submitted", (event) => {
            let formData = event.detail;
            let names = getFilteredNames(formData.formFieldData[0].value);
            setResults("search_2_results", names);
        });

        const search3 = document.querySelector("#search_3");
        setResults("search_3_results", getFilteredNames());
        search3.addEventListener("updated", (event) => {
            let fieldData = event.detail;
            let names = getFilteredNames(fieldData.value);
            setResults("search_3_results", names);
        });

        const search4 = document.querySelector("#search_4");
        setResults("search_4_results", getFilteredNames());
        search4.addEventListener("updated", (event) => {
            let fieldData = event.detail;
            let names = getFilteredNames(fieldData.value);
            setResults("search_4_results", names);
        });
    },
};
</script>
