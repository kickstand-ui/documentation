---
{
    "description": "The Kickstand UI search form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Search Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI telephone form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Search

<div class="my-xl">
    <ks-form-field
        type="search"
        label="Search"
        icon="search">
    </ks-form-field>
</div>

```html
<ks-form-field
        type="search"
        label="Search"
        icon="search">
</ks-form-field>
```

The `search` input type may not seem that different from a standard `text` input, but there are some additional features that make it preferable over other input types:

- it provides an important landmark for assistive technologies
- modern browsers will store search terms and provide autocomplete options on future searches
- browsers implement the UI for this field inconsistently, but Kickstand UI has implemented a consistent UI for all browsers

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
