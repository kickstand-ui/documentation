---
{
    "description": "Using Kickstand UI to add search capabilities to your site.",
    "meta": [
        {
            "property": "og:title",
            "content": "Adding Search To your Site - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/autocomplete.png"
        },
        {
            "property": "og:description",
            "content": "Using Kickstand UI to add search capabilities to your site."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/autocomplete.png"
        }
    ]
}
---

# Search Form

In this guide you will see some of the more common ways to use Kickstand UI to add search to your site as well as some of the features simplify the process.

## Adding a Search Form

One fo the most common use-cases for search is the "site search" that is usually found in the header of the page. Kickstand's [inline form](/forms/form.html#inline-forms) makes this very simple.

<div class="my-xxxl w-50">
    <ks-form inline>
        <ks-form-field label="Search" type="search"></ks-form-field>
        <ks-button type="submit">
            <ks-icon icon="search" label="search"></ks-icon>
        </ks-button>
    </ks-form>
</div>

```html
<ks-form inline>
    <ks-form-field label="Search" type="search"></ks-form-field>
    <ks-button type="submit">
        <ks-icon icon="search" label="search"></ks-icon>
    </ks-button>
</ks-form>
```

:::tip ACCESSIBILITY NOTE
The `label` property is used on the icon in the search button. This populates the `aria-label` property which is visible to screen readers and other assistive technologies.
:::

## Styling Your Form

Now, if this form is going in header of your page, you might want it to be a little more compact. Let's hide the label, make it more compact, remove the background.

<div class="my-xxxl w-40">
    <ks-form class="p-none b-none bg-transparent" inline>
        <ks-form-field label="Search" type="search" size="sm" hide-label></ks-form-field>
        <ks-button type="submit" size="sm">
            <ks-icon icon="search" label="search"></ks-icon>
        </ks-button>
    </ks-form>
</div>

```html
<ks-form class="p-none b-none bg-transparent" inline>
    <ks-form-field label="Search" type="search" size="sm" hide-label></ks-form-field>
    <ks-button type="submit" size="sm">
        <ks-icon icon="search" label="search"></ks-icon>
    </ks-button>
</ks-form>
```

:::tip ACCESSIBILITY NOTE
The `hide-label` property was added to the form field to hide the label, but it is still visible to screen readers and other assistive technologies.
:::

### Inline Button

To reduce the amount of buttons that stand out in the UI, many designers choose to display the button within the input field. Rather than absolutely position the button over the input field and wrestle with spacing to get everything lined up just right, you can style the form so it has the appearance of being set within the input. To accomplish this we will do 3 things:

1. Remove the shadow, background, and border of the input
2. Add the inner shadow, and border to the form
3. Update the button to display as `clear`

<div class="my-xxxl w-40">
    <ks-form class="p-none b-none bg-transparent b-xxxs shadow-inner" inline>
        <ks-form-field label="Search" type="search" size="sm" input-class="bg-transparent shadow-none b-none" hide-label></ks-form-field>
        <ks-button type="submit" size="sm" display="clear">
            <ks-icon icon="search" label="search"></ks-icon>
        </ks-button>
    </ks-form>
</div>

```html
<ks-form class="p-none b-none bg-transparent b-xxxs shadow-inner" inline>
    <ks-form-field label="Search" type="search" size="sm" input-class="bg-transparent shadow-none b-none" hide-label></ks-form-field>
    <ks-button type="submit" size="sm" display="clear">
        <ks-icon icon="search" label="search"></ks-icon>
    </ks-button>
</ks-form>
```

## Getting Search Value

The `<ks-form>` element emits a `submitted` event when it is submitted by pressing enter or clicking the submit button. The event will emit with the form data and validation information in the `event.detail` property.

### Form Setup

First, let's add a form and listen for the submitted event:

```html
<ks-form id="search_1" class="p-none b-none bg-transparent" inline>
    ...
</ks-form>
<script>
    const searchForm = document.querySelector('#search_1');

    searchForm.addEventListener('submitted', (event) => {
        ...
    });
</script>
```

### Display Results

Next, for display purposes, let's display the search results in a modal when it gets submitted.

```html
<ks-modal id="search_1_modal" modal-title="You just submitted...">
    <pre id="search_1_data" class="bg-light"></pre>
</ks-modal>

<script>
    const searchModal = document.querySelector('#search_1_modal');
    const searchContent = searchModal.querySelector('#search_1_data');
</script>
```

When the form gets submitted, let's set the search form content in the modal and show the modal.

```js
searchForm.addEventListener('submitted', (event) => {
    let formData = event.detail;
    searchContent.innerText = JSON.stringify(formData, null, 2);
    searchModal.show();
});
```

### Final Result

Here is the working form:

<div class="mb-xl w-40">
    <ks-form id="search_1" class="p-none b-none bg-transparent" inline>
        <ks-form-field label="Search" type="search"></ks-form-field>
        <ks-button type="submit">
            <ks-icon icon="search" label="search"></ks-icon>
        </ks-button>
    </ks-form>
    <ks-modal id="search_1_modal" modal-title="You just submitted...">
        <pre id="search_1_data" class="bg-light"></pre>
    </ks-modal>
    <script>
        (function() {
            const searchForm = document.querySelector('#search_1');
            const searchModal = document.querySelector('#search_1_modal');
            const searchContent = searchModal.querySelector('#search_1_data');
            searchForm.addEventListener('submitted', (event) => {
                setTimeout(function() {
                    searchContent.innerText = JSON.stringify(event.detail, null, 2);
                    searchModal.show();
                });
            });
        })();
    </script>
</div>

Here is the complete code:

```html
<ks-form id="search_1" class="p-none b-none bg-transparent" inline>
    <ks-form-field label="Search" type="search" size="sm"></ks-form-field>
    <ks-button type="submit" size="sm">
        <ks-icon icon="search" label="search"></ks-icon>
    </ks-button>
</ks-form>

<!-- Modal to display search data -->
<ks-modal id="search_1_modal" modal-title="You just submitted...">
    <pre id="search_1_data" class="bg-light"></pre>
</ks-modal>


<script>
    const searchModal = document.querySelector('#search_1_modal');
    const searchContent = searchModal.querySelector('#search_1_data');
    const searchForm = document.querySelector('#search_1');

    searchForm.addEventListener('submitted', (event) => {
        setTimeout(() => {
            let formData = event.detail;
            searchContent.innerText = JSON.stringify(formData, null, 2);
            searchModal.show();
        });
    });
</script>
```

## Filtering Data

Above we are only displaying the value, but now that we have it, we can do things like send it to an API to perform searches on the server. In the next few examples we will be filtering an array of values.

### Filtering an Array

In this example we will take the following list of names and filter them based on the search form value when the form is submitted:

```js
const names = [
    'Michael Scott',
    'Jim Halpert',
    'Pam Halpert',
    'Dwight Schrute',
    'Jan Levinson',
    'Angela Martin',
    'Ryan Howard'
];
```

We will use the following function to filter the list of names:

```js
function getFilteredNames(search) {
    return !search
        ? names 
        : names.filter((name) => name.includes(search));
}
```

Finally, we will be displaying the results in a table and will be updating the UI using the following markup and function:

```html
<table class="table">
    <thead>
        <tr>
            <th>Names</th>
        </tr>
    </thead>
    <tbody id="search_2_results">
    </tbody>
</table>

<script>
    function setResults(id, results) {
        const tableResults = document.querySelector(`#${id}`);
        tableResults.innerHTML = results.map((result) => `<tr><td>${result}</td></tr>`).join();
    }
</script>
```

Now we will replace our previous logic that displayed the form data in a modal with the logic to filter and display our list.

```js
searchForm.addEventListener('submitted', (event) => {
    setTimeout(() => {
        let formData = event.detail;
        let names = getFilteredNames(formData[0].value);
        setResults('search_2_results', names);
    });
});
```

<div class="w-30 mt-xxl">
    <ks-form id="search_2" class="p-none b-none bg-transparent" inline>
        <ks-form-field label="Search 2" type="search"></ks-form-field>
        <ks-button type="submit">
            <ks-icon icon="search" label="search"></ks-icon>
        </ks-button>
    </ks-form>
</div>

<table class="table striped">
    <thead>
        <tr>
            <th>Names</th>
        </tr>
    </thead>
    <tbody id="search_2_results">
    </tbody>
</table>

## Auto-Submitting Search

There may be times where you want to have the results filter as the user types in the input field. Rather than use a search form we can do the following:

- use a search input without a form or submit button
- listen for the `updated` event (which will be emitted each time the user types)
- execute our `getFilteredNames` and `setResults` functions we created above to update our UI

```html
<ks-form-field id="search_3" label="Search 3" type="search" icon="search"></ks-form-field>

<table class="table striped">
    <thead>
        <tr>
            <th>Names</th>
        </tr>
    </thead>
    <tbody id="search_3_results">
    </tbody>
</table>

<script>
    const search3 = document.querySelector('#search_3');
    search3.addEventListener('updated', (event) => {
        setTimeout(() => {
            let fieldData = event.detail;
            let names = getFilteredNames(fieldData.value);
            setResults('search_3_results', names);
        });
    });
</script>
```

<div class="w-30 mt-xxl">
    <ks-form-field id="search_3" label="Search 3" type="search" icon="search"></ks-form-field>
</div>

<table class="table striped">
    <thead>
        <tr>
            <th>Names</th>
        </tr>
    </thead>
    <tbody id="search_3_results">
    </tbody>
</table>

## Debounce

If you are filtering a list locally like we are here, filtering the results on every key stroke is probably fine. However, if you are pulling the results from an API, you probably don't want to make request to the server every time the user makes a key stoke. To help with this you can use the `debounce` property to wait for the user to stop typing before the code executes. Let's add a debounce method to the form field to delay the filter by half a second (500 milliseconds).

```html
<ks-form-field id="search_4" label="Search 4" type="search" icon="search" debounce="500"></ks-form-field>
```

<div class="w-30 mt-xxl">
    <ks-form-field id="search_4" label="Search 4" type="search" icon="search" debounce="500"></ks-form-field>
</div>

<table class="table striped">
    <thead>
        <tr>
            <th>Names</th>
        </tr>
    </thead>
    <tbody id="search_4_results">
    </tbody>
</table>

<script>
    setTimeout(() => {
        function getFilteredNames(search) {
            const names = [
                'Michael Scott',
                'Jim Halpert',
                'Pam Halpert',
                'Dwight Schrute',
                'Jan Levinson',
                'Angela Martin',
                'Ryan Howard'
            ];
            return !search
                ? names
                : names.filter((name) => name.includes(search));
        }

        function setResults(id, results) {
            const tableResults = document.querySelector(`#${id}`);
            tableResults.innerHTML = results.map((result) => `<tr><td>${result}</td></tr>`).join('');
        }

        const search2 = document.querySelector('#search_2');
        setResults('search_2_results', getFilteredNames());
        search2.addEventListener('submitted', (event) => {
            setTimeout(() => {
                let formData = event.detail;
                let names = getFilteredNames(formData.formFieldData[0].value);
                setResults('search_2_results', names);
            });
        });

        const search3 = document.querySelector('#search_3');
        setResults('search_3_results', getFilteredNames());
        search3.addEventListener('updated', (event) => {
            setTimeout(() => {
                let fieldData = event.detail;
                let names = getFilteredNames(fieldData.value);
                setResults('search_3_results', names);
            });
        });

        const search4 = document.querySelector('#search_4');
        setResults('search_4_results', getFilteredNames());
        search4.addEventListener('updated', (event) => {
            setTimeout(() => {
                let fieldData = event.detail;
                let names = getFilteredNames(fieldData.value);
                setResults('search_4_results', names);
            });
        });
    }, 100);
</script>

<style>
.ks-form-field .input-wrapper .icon-right {
    margin-right: 0;
}

.ks-form-field .input-wrapper .icon-right .input-icon {
    margin-right: 0.75rem;
}

.ks-form-field .icon-right .button {
    margin-right: 0;
    font-size: 1rem;
}

.ks-form-field .icon-right .button svg {
    font-size: 1rem;
}
</style>
