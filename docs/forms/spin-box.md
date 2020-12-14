---
{
    "description": "The Kickstand UI spin-box control allows users to increase or decrease the number value in the text field by a specific increment.",
    "meta": [
        {
            "property": "og:title",
            "content": "Spin-Box Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/spin-box.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI spin-box control allows users to increase or decrease the number value in the text field by a specific increment."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/spin-box.png"
        }
    ]
}
---

# Spin-Box

The Kickstand UI spin-box control allows users to increase or decrease the number value in the text field by a specific increment.

<div class="my-lg">
    <ks-form-field label="Quantity" type="spin-box"></ks-form-field>
</div>

```html
<ks-form-field label="Quantity" type="spin-box"></ks-form-field>
```

## Min/Max Values

You can create parameters on how large or small the input value can be using the `min` and `max` parameters. If a value is manually input outside of those parameters, it will trigger the input validation and display an error (which you can [customize](/forms/form-field.html#validation)).

<div class="my-lg">
    <ks-form-field
        label="Quantity"
        type="spin-box"
        value="1"
        min="1"
        max="5"
        help-text="Limit 5 per customer"
        max-error-message="You cave exceeded the limit of 5 per customer"
        >
    </ks-form-field>
</div>

```html
<ks-form-field
    label="Quantity"
    type="spin-box"
    value="1"
    min="1"
    max="5"
    help-text="Limit 5 per customer"
    max-error-message="You have exceeded the limit of 5 per customer"
    >
</ks-form-field>
```

## Increment Quantity

You can specify the amount by which you increment and decrement the value by using the `step` property.

<div class="my-lg">
    <ks-form-field label="Quantity" type="spin-box" step="10"></ks-form-field>
</div>

```html
<ks-form-field label="Quantity" type="spin-box" step="10"></ks-form-field>
```

## Disabled

Disabling the control will prevent any interaction with the value.

<div class="my-lg">
    <ks-form-field label="Quantity" type="spin-box" value="7" disabled></ks-form-field>
</div>

```html
<ks-form-field label="Quantity" type="spin-box" value="7" disabled></ks-form-field>
```

## Accessibility

There are a few accessibility features that have been added to make this feature more useful:

1. When focused on the input field users may also use the keyboard to use the up and down keys to increase or decrease the value based on the specified increment.
2. As a user increases or decrease the value, and `aria-live` region is updated with the new value so assistive technologies can update the users on the new value.

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
