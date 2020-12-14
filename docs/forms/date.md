---
{
    "description": "The Kickstand UI date form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Date Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI date form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Date and Time

Kickstand UI's date and time input fields are native HTML input types.

:::tip Note
The "date" input types (`date`, `month`, `week`, `time`, etc.) do not have great [browser coverage](https://caniuse.com/#feat=input-datetime). If a browser does not provide support for the specific input type, it will be displayed as `text` input field. Please make sure to test to ensure you have the desired user experience.
:::

<div class="my-xl">
    <ks-form-field type="date" label="Choose your birthday" />
</div>

```html
<ks-form-field type="date" label="Choose your birthday" />
```

## Month

<div class="my-xl">
    <ks-form-field type="month" label="Credit Card Expiration" />
</div>

```html
<ks-form-field type="month" label="Credit Card Expiration" />
```

## Week

<div class="my-xl">
    <ks-form-field type="week" label="Week of your reservation" />
</div>

```html
<ks-form-field type="week" label="Week of your reservation" />
```

## Time

<div class="my-xl">
    <ks-form-field type="time" label="What time is it?" />
</div>

```html
<ks-form-field type="time" label="What time is it?" />
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
