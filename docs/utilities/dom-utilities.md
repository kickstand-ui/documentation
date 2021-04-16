---
{
    "description": "Kickstand UI's DOM Utilities are designed to keep your JavaScript clean and easy to read.",
    "meta": [
        {
            "property": "og:title",
            "content": "DOM Utilities - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/kickstand_card.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's DOM Utilities are designed to keep your JavaScript clean and easy to read."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/kickstand_card.png"
        }
    ]
}
---

# DOM Utilities

Unlike the rest of Kickstand UI's utilities, DOM utilities are for JavaScript. These utilities are designed to keep your JavaScript/TypeScript clean and easy to read.

## Installation

If you are using the library from the CDN, these methods will automatically be included. If you are using the `npm` package, you can import them from the `kickstand-ui` package.

```js
import { $, $$ } from 'kickstand-ui';
```

:::tip NOTE
The only methods that need to be imported are `$` and `$$`. The others will automatically be included with the library reference.
:::

## `$()` and `$$()`

These two methods may look similar to another popular JavaScript library, but these are just a simple abstractions of `document.querySelector()` (`$`) and `document.querySelectorAll()` (`$$`). There are a few things to be aware of:

1. If you are using TypeScript, these are generic functions (`$<T>()` and `$$<T>()`), so you can pass in the custom element type to get autocomplete features from your editor
2. Unlike `document.querySelectorAll()`, `$$()` function returns an `array` of elements rather than a `NodeList`. This is so array functions like `map` and `forEach` play nice with the results.

```html
<ks-form id="my_form">
    <ks-form-field label="First Name"></ks-form-field>
    <ks-form-field label="Last Name"></ks-form-field>
    <ks-form-field label="Email" type="email"></ks-form-field>
</ks-form-field>

<script>
    const $myForm = $('ks-form'); // returns the first `ks-form` element it finds on the page
    const $myFields = $$('ks-form-field'); // returns all form fields on the page
</script>
```

### Using TypeScript

```ts
const $myForm = $<HTMLKsFormElement>('ks-form'); // returns the first `ks-form` element it finds
const $myFields = $$<HTMLKsButtonElement>('ks-form-field'); // returns all form fields
```

:::tip NOTE
Prefixing your variables with a `$` is not necessary, but if you prefix your variables that contain DOM elements with it, it makes it much easier to distinguish them from your other variables.
:::

## `.query()` and `.queryAll()`

Similar to the methods above, `.query()` and `.queryAll()` use `querySelector()` and `querySelectorAll()` respectively, but rather than look through the whole `document` they look within a selected `element`. This provides better performance and more accurate results.

So, in order to optimize the example above we can update the code like this:

```js
const $myForm = $('ks-form');
const $myFields = $myForm.queryAll('ks-form-field');
```

### Using TypeScript

```ts
const $myForm = $<HTMLKsFormElement>('ks-form');
const $myFields = $myForm.queryAll<HTMLKsButtonElement>('ks-form-field');
```

## `.on()`

The `.on()` method is an abstraction of `addEventListener()`. Similarly, this method take 2 parameters: the event and a callback function.

```js
$myForm.on('submitted', () => {
    // do something awesome when the form is submitted
});
```

You can also add it directly to an array or node list of elements:

```js
$myFields.on('updated', () => {
    // do something awesome each time any of the field items change
});
```

<!-- :::tip
For more examples of these utilities in action, check out our [Guides](../guides/overview.md).
::: -->
