---
{
    "description": "Using Kickstand UI to add a Contact Form to your site.",
    "meta": [
        {
            "property": "og:title",
            "content": "Adding Contact Form To your Site - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form.png"
        },
        {
            "property": "og:description",
            "content": "Using Kickstand UI to add a Contact Form to your site."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form.png"
        }
    ]
}
---

# Contact Form

In this guide you will see how to easily create forms, add validation, and get form data.

## Create a contact Form

The contact form will have the following requirements:

| Field        | Requirements                                   |
| ------------ | ---------------------------------------------- |
| Name         | required                                       |
| Email        | required, email validation                     |
| Phone Number | optional, must follow the pattern XXX-XXX-XXXX |
| Comments     | required, multi-line free-form text field      |

Translating those requirements into code is actually pretty straight forward with Kickstand UI.

```html
<ks-form>
    <ks-form-field label="Name" required></ks-form-field>
    <ks-form-field label="Email" type="email" required></ks-form-field>
    <ks-form-field label="Phone Number" name="phoneNumber" help-text="XXX-XXX-XXXX" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" pattern-error-message="Must be in the XXX-XXX-XXXX format"></ks-form-field>
    <ks-form-field label="Comment" type="textarea" required></ks-form-field>
    <ks-button type="submit">Submit</ks-button>
</ks-form>
```

<div class="my-xxxl">
    <ks-form id="contact_form">
        <ks-form-field label="Name" required></ks-form-field>
        <ks-form-field label="Email" type="email" required></ks-form-field>
        <ks-form-field label="Phone Number" name="phoneNumber" help-text="XXX-XXX-XXXX" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" pattern-error-message="Must be in the XXX-XXX-XXXX format"></ks-form-field>
        <ks-form-field label="Comment" type="textarea" required></ks-form-field>
        <ks-button type="submit">Submit</ks-button>
    </ks-form>
</div>

## Getting Form Values

Now that we have the form set up, we need to get the form data to submit to the server. The form emits a `submitted` event when the user clicks the submit button or presses `enter`. That event also emits the form data as well as the form validation information.

```js
$('#contact_form').on('submitted', (event) => {
    alert(JSON.stringify(event.detail, null, 2));
});
```

If we submit the form without filling out any fields, we will see the following data in the console:

```js
{
    isValid: false,
    formData: {...}
    formFieldData: [...],
}
```

### Form Data

The `formData` property is a summary `<ks-form-field>` input values. Property name is derived automatically from the `label` property. You can set this to a custom value using the `name` property on the `<ks-form-field>` element.

```js
formData: {
    name: "",
    email: "",
    phoneNumber: "",
    comment: ""
}
```

### Form Field Data

When we expand the `formFieldData` array, we will see some great information about each of our fields. For example, let's take a look at the first field in the array. It should be for the "Name" field.

```js
{
    isValid: false,
    name: "name",
    validity: {...},
    value: undefined
}
```

Most of this is fairly straight forward, but there are a few things we should know. The first is that the `name` field is derived automatically from the `label` property. You can set this manually using the `name` property.

The second thing you should know is that the `validity` object is validation data provided by HTML 5 form validation. This should help give you a better idea of why the field is invalid.

```js
{
    badInput: false
    customError: false
    patternMismatch: false
    rangeOverflow: false
    rangeUnderflow: false
    stepMismatch: false
    tooLong: false
    tooShort: false
    typeMismatch: false
    valid: false
    valueMissing: true
}
```

In this example, we can see that the field is invalid because `valueMissing` is `true`. In other words, a required field does not have a value. To learn more about these properties and how they are set, checkout [this great documentation](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState).

## Working With Your Data

Now that we have the form data, we can use it however we need. As a quick example we will check if the form is valid, and if it is, send it to the server.

```js
$('#contact_form').on('submitted', (event) => {
    const contactForm = event.detail;

    if(!contactForm.isValid)
        return;
    
    fetch('https://example.com/profile', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm.formData),
    })
    .then(...);
});
```

:::tip NOTE
This guide uses the Kickstand UI [DOM utilities](../utilities/dom-utilities.md) to help keep the code clean and easy to read.
:::

<ContactFormGuide />
