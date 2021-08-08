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
<ks-form id="search" inline>
    ...
</ks-form>
<script>
    $('#search').on('submitted', (event) => {
        ...
    });
</script>
```

:::tip NOTE
This guide uses the Kickstand UI [DOM utilities](../utilities/dom-utilities.md) to help keep the code clean and easy to read.
:::

### Display Results

Next, for display purposes, let's display the search results in a modal when it gets submitted.

```html
<ks-modal id="search_modal" modal-title="You just submitted...">
    <pre id="search_data" class="bg-light-light"></pre>
</ks-modal>
```

When the form gets submitted, let's set the search form content in the modal and show the modal.

```js
$('#search').on('submitted', (event) => {
    let formData = event.detail;
    $('#search_data').innerText = JSON.stringify(formData, null, 2);
    $('#search_modal').show();
});
```

### Final Result

<p class="codepen" data-height="600" data-default-tab="html,result" data-slug-hash="gOWxKQy" data-editable="true" data-user="break-stuff" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/break-stuff/pen/gOWxKQy">
  Kickstand UI Getting Search Input Value</a> by break-stuff (<a href="https://codepen.io/break-stuff">@break-stuff</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

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
    <tbody id="search_results">
    </tbody>
</table>

<script>
    function setResults(id, results) {
        $(`#${id}`).innerHTML = results.map((result) => `<tr><td>${result}</td></tr>`).join();
    }
</script>
```

Now we will replace our previous logic that displayed the form data in a modal with the logic to filter and display our list.

```js
$('#search').on('submitted', (event) => {
    let searchValue = event.detail.formData.search;
    let names = getFilteredNames(searchValue);
    setResults('search_results', names);
});
```

### Filter Result

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="YzVxvgR" data-editable="true" data-user="break-stuff" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/break-stuff/pen/YzVxvgR">
  Kickstand UI - Filtering Data</a> by break-stuff (<a href="https://codepen.io/break-stuff">@break-stuff</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Auto-Submitting Search

There may be times where you want to have the results filter as the user types in the input field. Rather than use a search form we can do the following:

- use a search input without a form or submit button
- listen for the `updated` event (which will be emitted each time the user types)
- execute our `getFilteredNames` and `setResults` functions we created above to update our UI

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="mdmMjEN" data-editable="true" data-user="break-stuff" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/break-stuff/pen/mdmMjEN">
  Kickstand UI - Auto-Submitting Search</a> by break-stuff (<a href="https://codepen.io/break-stuff">@break-stuff</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Debounce

If you are filtering a list locally like we are here, executing the filter on every key stroke is probably fine. However, if you are pulling the results from a server, you probably don't want to make request to the server every time the user types. To help with this you can use the `debounce` property to wait for the user to stop typing before the code executes. Let's add a debounce method to the form field to delay the filter by half a second (`500 milliseconds`).

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="QWvqGae" data-editable="true" data-user="break-stuff" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/break-stuff/pen/QWvqGae">
  Kickstand UI - Sign Up Form</a> by break-stuff (<a href="https://codepen.io/break-stuff">@break-stuff</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Accessibility

The finish touch is to improve the usability by adding some accessibility love to our search. A nice feature is provide feedback to the user when search results change. If a user can see the screen, they can easily detect changes in the search results, but it's a bit more difficult for users that rely on assistive technologies. To help with that, we need a way to provide that feedback using assistive technologies.

Fortunately, the [`aria-live`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) attribute is designed to do just that and, fortunately, Kickstand UI's [alert component](../components/alert.md) has it built-in.

The first thing we will add is an alert to the page and add the `sr-only` class to it so it is visually hidden but still available to assistive technologies.

```html
<ks-alert class="sr-only"><span id="search_count"></span> results found</ks-alert>
```

We have added a `span` tag with the ID `search_count` as our placeholder. Let's add some JavaScript to update it when the search results change. Since we have the `aria-live` attribute on the alert, it will broadcast the change every time we update the results.

```js
function setResults(id, results) {
  $('#search_count').innerText = results.length;
  $(`#${id}`).innerHTML = results
    .map((result) => `<tr><td>${result}</td></tr>`)
    .join("");
}
```

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="WNjZpOz" data-editable="true" data-user="break-stuff" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/break-stuff/pen/WNjZpOz">
  Kickstand UI - Debounce</a> by break-stuff (<a href="https://codepen.io/break-stuff">@break-stuff</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>