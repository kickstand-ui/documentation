---
{
    "description": "The Kickstand UI email form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Email Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI email form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Email

The email input uses the HTML email input type under the hood and provides basic email validation.

<div class="my-xl">
    <ks-form-field type="email" label="Email" />
</div>

```html
<ks-form-field type="email" label="Email" />
```

## Custom Validation

The `email` type can work nicely with the `pattern` attribute to create custom validation. The following example allows only emails with a specific domain.

<div class="my-xl">
    <ks-form-field type="email" help-text="Use your 'dundermifflin.com' email" label="Email" minlength="7" pattern=".+@dundermifflin.com"></ks-form-field>
</div>

```html
<ks-form-field
    type="email"
    help-text="Use your 'dundermifflin.com' email"
    label="Email"
    minlength="7"
    pattern=".+@dundermifflin.com">
</ks-form-field>
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
