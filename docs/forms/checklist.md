---
{
    "description": "The Kickstand UI checklist control allows you to select multiple values from a predefined list for submission in a form.",
    "meta": [
        {
            "property": "og:title",
            "content": "Checklist Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI checklist control allows you to select multiple values from a predefined list for submission in a form."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Checklist

Checklists are great if users need to be able to choose multiple options from a predetermined list. Kickstand UI's checklist leverages the existing `<option>` element to provide the checklist options and just like the option element you can pre-select options using the `select` attribute as well as specify alternate values with the `value` attribute.

<div class="my-xl">
    <ks-form-field type="checklist" label="Choose your next office mates">
        <option selected>michael.scott@dundermifflin.com</option>
        <option>dwight.schrutte@dundermifflin.com</option>
        <option>pam.beasley@dundermifflin.com</option>
        <option disabled>jim.halpert@dundermifflin.com</option>
        <option>Meredith.palmer@dundermifflin.com</option>
    </ks-form-field>
</div>

```html
<ks-form-field type="checklist" label="Choose your next office mates">
    <option selected>michael.scott@dundermifflin.com</option>
    <option>dwight.schrutte@dundermifflin.com</option>
    <option>pam.beasley@dundermifflin.com</option>
    <option disabled>jim.halpert@dundermifflin.com</option>
    <option>Meredith.palmer@dundermifflin.com</option>
</ks-form-field>
```

## Value

You can also specify a value if you would like the selected values to be different from the display text.

<div class="my-xl">
    <ks-form-field type="checklist" label="Choose your next office mates">
        <option value="michael.scott@dundermifflin.com" selected>Michael Scott</option>
        <option value="dwight.schrutte@dundermifflin.com">Dwight Schrutte</option>
        <option value="pam.beasley@dundermifflin.com">Pam Beasley</option>
        <option value="jim.halpert@dundermifflin.com">Jim Halpert</option>
        <option value="Meredith.palmer@dundermifflin.com">Meredith Palmer</option>
    </ks-form-field>
</div>

```html
<ks-form-field type="checklist" label="Choose your next office mates">
    <option value="michael.scott@dundermifflin.com" selected>Michael Scott</option>
    <option value="dwight.schrutte@dundermifflin.com">Dwight Schrutte</option>
    <option value="pam.beasley@dundermifflin.com">Pam Beasley</option>
    <option value="jim.halpert@dundermifflin.com">Jim Halpert</option>
    <option value="Meredith.palmer@dundermifflin.com">Meredith Palmer</option>
</ks-form-field>
```

## Data Binding

The value returned from a checklist form field is an array of the values that have been selected.

<div class="my-xl">
    <ks-form-field type="checklist" label="Choose your next office mates">
        <option value="michael.scott@dundermifflin.com" selected>Michael Scott</option>
        <option value="dwight.schrutte@dundermifflin.com">Dwight Schrutte</option>
        <option value="pam.beasley@dundermifflin.com" selected>Pam Beasley</option>
        <option value="jim.halpert@dundermifflin.com">Jim Halpert</option>
        <option value="Meredith.palmer@dundermifflin.com">Meredith Palmer</option>
    </ks-form-field>
</div>

```json
{
    value: ["michael.scott@dundermifflin.com", "pam.beasley@dundermifflin.com"],
    isValid: true,
    validity: {
        badInput: false
        customError: false
        patternMismatch: false
        rangeOverflow: false
        rangeUnderflow: false
        stepMismatch: false
        tooLong: false
        tooShort: false
        typeMismatch: false
        valid: true
        valueMissing: false
    }
}
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
