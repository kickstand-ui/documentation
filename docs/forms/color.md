---
{
    "description": "The Kickstand UI color form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Text Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI color form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Color Picker

The color input utilizes the HTML5 color-picker for users to select colors colors from a color wheel or manually enter it in various formats. The value returned is in hexadecimal format.

<div class="my-xl">
    <ks-form-field type="color" label="Your favorite color" />
</div>

```html
<ks-form-field type="color" label="Your favorite color" />
```

:::tip Note
The HTML5 `color` input type is not supported by [all browsers](https://caniuse.com/#feat=input-color). If it is not supported, the input will fall back to a text box where the user can enter a color value.
:::

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
