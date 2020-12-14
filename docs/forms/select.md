---
{
    "description": "The Kickstand UI select form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Select Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI select form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Select

Setting the `type` property to `select` allows you nest a list of options within the form field component to provide the user available options.

<div class="my-xl">
    <ks-form-field label="Options" type="select">
        <option value="" selected>Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </ks-form-field>
</div>

```html
<ks-form-field label="Options" type="select">
    <option value="" selected>Select an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</ks-form-field>
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
