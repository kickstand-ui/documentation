---
{
    "description": "The Kickstand UI number form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Number Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI number form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Number

<div class="my-xl">
    <ks-form-field type="number" label="Age" />
</div>

```html
<ks-form-field type="number" label="Age" />
```

## Min/Max Value

You can control the minimum and maximum values using the `min` and `max` attributes.

<div class="my-xl">
    <ks-form-field type="number" min="5" max="10" label="Pick a number between 5 and 10" />
</div>

```html
<ks-form-field
    type="number"
    min="5"
    max="10"
    label="Pick a number between 5 and 10">
</ks-form-field>
```

## Step

You can control the increments in which a user selects using the `step` attribute.

<div class="my-xl">
    <ks-form-field type="number" step="5" label="Quantity" help-text="These are bundled in packs of 5" />
</div>

```html
<ks-form-field
    type="number"
    step="5"
    label="Quantity"
    help-text="These are bundled in packs of 5">
</ks-form-field>
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
