---
{
    "description": "The Kickstand UI range form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Range Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI range form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Range

<div class="my-xl">
    <ks-form-field type="range" label="Volume" />
</div>

```html
<ks-form-field type="range" label="Volume" />
```

## Default Values

The range input will have a default minimum value of `0` and a maximum value of `100` and the slider will be set at the middle of the range. It will slide up and down at increments of `1`.

You can change the default values by adding `min`, `max`, and `step` values.

<div class="my-xl">
    <ks-form-field type="range" label="Volume" min="-50" max="50" step="10" value="-20" />
</div>

```html
<ks-form-field
    type="range"
    label="Volume"
    min="-50"
    max="50"
    step="10"
    value="-20">
</ks-form-field>
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
