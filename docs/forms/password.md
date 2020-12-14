---
{
    "description": "The Kickstand UI password form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "Password Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI password form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Password

The password input operates the same as a standard HTML password input, with one exception. There is a "password reveal" feature that will allow the user to display their password. This feature is available in some browsers, but to improve the user experience, it has been globally implemented in the Kickstand UI component.

<div class="my-xl">
    <ks-form-field type="password" label="Password" />
</div>

```html
<ks-form-field type="password" label="Password" />
```

## Validation

Feel free to take advantage of the validation features to ensure passwords meet your strength requirements.

<div class="my-xl">
    <ks-form-field
        type="password"
        minlength="8"
        label="Password"
        help-text="Must be at least 8 characters, contain 1 number, and 1 special character"
        pattern="(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[\W])"
        pattern-error-message="You password is missing a number or a special character">
    </ks-form-field>
</div>

```html
<ks-form-field
    type="password"
    minlength="8"
    label="Password"
    help-text="Must be at least 8 characters, contain 1 number, and 1 special character"
    pattern="(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[\W])"
    pattern-error-message="You password is missing a number or a special character">
</ks-form-field>
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
