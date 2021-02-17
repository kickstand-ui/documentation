---
{
    "description": "The Kickstand UI checkbox type allows you to select single values for submission in a form.",
    "meta": [
        {
            "property": "og:title",
            "content": "Checkbox Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI checkbox type allows you to select single values for submission in a form."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# Checkbox

The `checkbox` type allows you to select single values for submission in a form. If you would like to provide multiple options, check out the [checklist component](./checklist.md).

<div class="my-xl">
    <ks-form-field type="checkbox" label="Unchecked" />
    <ks-form-field type="checkbox" label="Checked" checked />
</div>

```html
<ks-form-field type="checkbox" label="Unchecked" />
<ks-form-field type="checkbox" label="Checked" checked />
```

## Disabled

<div class="my-xl">
    <ks-form-field type="checkbox" label="Disabled Unchecked" disabled />
    <ks-form-field type="checkbox" label="Disabled Checked" disabled checked />
</div>

```html
<ks-form-field type="checkbox" label="Disabled Unchecked" disabled />
<ks-form-field type="checkbox" label="Disabled Checked" disabled checked />
```

## Indeterminate

<div class="my-xl">
    <ks-form-field type="checkbox" label="Indeterminate Checkbox" indeterminate />
    <ks-form-field type="checkbox" label="Disabled Indeterminate Checkbox" indeterminate disabled />
</div>

```html
<ks-form-field type="checkbox" label="Indeterminate Checkbox" indeterminate />
<ks-form-field type="checkbox" label="Disabled Indeterminate Checkbox" indeterminate disabled />
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
