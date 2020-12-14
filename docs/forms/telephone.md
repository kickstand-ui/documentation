---
{
    "description": "The Kickstand UI telephone form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Telephone Form Field Component - Kickstand UI"
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

# Telephone

<div class="my-xl">
    <ks-form-field
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        label="Telephone Number"
        help-text="XXX-XXX-XXXX"
        pattern-error-message="Must follow the XXX-XXX-XXXX format"
        />
</div>

```html
<ks-form-field
    type="tel"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    label="Telephone Number"
    help-text="XXX-XXX-XXXX"
    pattern-error-message="Must follow the XXX-XXX-XXXX format">
</ks-form-field>
```

It is important to note that the `tel` input type does _not_ provide any default validation (because phone number patterns can vary), so it is important to use it in conjunction with the `pattern` attribute. Using the `tel` input.

:::tip Note
Before you decide to ditch the `tel` input type for the standard `text` field, there are still some benefits to using `tel`:

- It can provide a custom keyboard for mobile and touch enabled devices
- Browser and third-party autocomplete tools can use it to speed up your user's form entry
:::

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
