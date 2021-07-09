---
{
    "description": "The Kickstand UI autocomplete control shows suggestions that match what the user types as they type.",
    "meta": [
        {
            "property": "og:title",
            "content": "Autocomplete Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/autocomplete.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI autocomplete control shows suggestions that match what the user types as they type."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/autocomplete.png"
        }
    ]
}
---

# Autocomplete

This component shows suggestions that match what the user types as they type. They can select a suggestion to complete their entry quickly and accurately or keep typing to further refine the suggested options.

<div class="my-lg">
    <ks-form-field label="Employee" type="autocomplete">
        <option>Michael Scott</option>
        <option>Dwight Schrute</option>
        <option>Pam Beesly</option>
        <option>Jim Halpert</option>
        <option>Angela Martin</option>
        <option>Ryan Howard</option>
    </ks-form-field>
</div>

```html
<ks-form-field label="Employee" type="autocomplete">
    <option>Michael Scott</option>
    <option>Dwight Schrute</option>
    <option>Pam Beesly</option>
    <option>Jim Halpert</option>
    <option>Angela Martin</option>
    <option>Ryan Howard</option>
</ks-form-field>
```

## Value

The value returned from the example above will be the text within the `<option>` tag. You can specify an alternate value using the `value` attribute.

```html
<ks-form-field label="Employee" type="autocomplete">
    <option value="ms">Michael Scott</option>
    <option value="ds">Dwight Schrute</option>
    <option value="pb">Pam Beesly</option>
    <option value="jh">Jim Halpert</option>
    <option value="am">Angela Martin</option>
    <option value="rh">Ryan Howard</option>
</ks-form-field>
```

## Search

You can also specify alternate search terms by using the `search` attribute. When using multiple search terms, use a delimiter like `|` to prevent unintended results.

<div class="my-lg">
    <ks-form-field label="Employee" type="autocomplete">
        <option search="Michael Scarn|Michael Klump">Michael Scott</option>
        <option search="Dwigt|Recyclops">Dwight Schrute</option>
        <option search="Pamalamadingdong|Pamcaso">Pam Beesly</option>
        <option search="Big Tuna">Jim Halpert</option>
        <option search="Monkey|Booster Seat">Angela Martin</option>
        <option search="Temp|Fire Guy">Ryan Howard</option>
    </ks-form-field>
</div>

```html
<ks-form-field label="Employee" type="autocomplete">
    <option search="Michael Scarn|Michael Klump">Michael Scott</option>
    <option search="Dwigt|Recyclops">Dwight Schrute</option>
    <option search="Pamalamadingdong|Pamcaso">Pam Beesly</option>
    <option search="Big Tuna">Jim Halpert</option>
    <option search="Monkey|Booster Seat">Angela Martin</option>
    <option search="Temp|Fire Guy">Ryan Howard</option>
</ks-form-field>
```

## Auto-Expand

You can configure the options list to expand when the user focuses on the input field using the `auto-expand` property.

<div class="my-lg">
    <ks-form-field label="Employee" type="autocomplete" auto-expand>
        <option>Michael Scott</option>
        <option>Dwight Schrute</option>
        <option>Pam Beesly</option>
        <option>Jim Halpert</option>
        <option>Angela Martin</option>
        <option>Ryan Howard</option>
    </ks-form-field>
</div>

```html
<ks-form-field label="Employee" type="autocomplete" auto-expand>
    ...
</ks-form-field>
```

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
