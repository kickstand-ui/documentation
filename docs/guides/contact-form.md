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
            "content": "https://kickstand-ui.com/images/screen_shots/autocomplete.png"
        },
        {
            "property": "og:description",
            "content": "Using Kickstand UI to add a Contact Form to your site."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/autocomplete.png"
        }
    ]
}
---

# Contact Form

In this guide you will see how to easily create forms, add validation, and get form data.

## Create a contact Form

The contact form will have the following requirements:

| Field        | Requirements                                       |
| ------------ | -------------------------------------------------- |
| Name         | required                                           |
| Email        | required, email validation                         |
| Phone Number | optional, must follow the pattern XXX-XXX-XXXX     |
| Comments     | required, multi-line free-form text field          |

Translating those requirements into code is actually pretty straight forward with Kickstand UI.

```html
<ks-form>
    <ks-form-field label="Name" required></ks-form-field>
    <ks-form-field label="Email" type="email" required></ks-form-field>
    <ks-form-field label="Phone Number" help-text="XXX-XXX-XXXX" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" pattern-error-message="Must be in the XXX-XXX-XXXX format"></ks-form-field>
    <ks-form-field label="Comment" type="textarea" required></ks-form-field>
    <ks-button type="submit">Submit</ks-button>
</ks-form>
```

<div class="my-xxxl">
    <ks-form id="contact_form">
        <ks-form-field label="Name" required></ks-form-field>
        <ks-form-field label="Email" type="email" required></ks-form-field>
        <ks-form-field label="Phone Number" help-text="XXX-XXX-XXXX" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" pattern-error-message="Must be in the XXX-XXX-XXXX format"></ks-form-field>
        <ks-form-field label="Comment" type="textarea" required></ks-form-field>
        <ks-button type="submit">Submit</ks-button>
    </ks-form>
</div>

## Getting Form Values

Now that we have the form set up, we need to get the form data to submit to the server. The form emits a `submitted` event when the user clicks the submit button or presses `enter`. That event also emits the form data as well as the form validation information.

```js
const form = document.querySelector('#contact_form');
form.addEventListener('submitted', (event) => {
    console.log('CONTACT FORM DATA', event.detail);
});
```

<!-- <script>
    (function () {
        window.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.querySelector('#contact_form');
            contactForm.addEventListener('submitted', (event) => {
                console.log('CONTACT FORM DATA', event.detail);
            });
        }, false);

        // setTimeout(() => {
        // }, 100);
    })();
</script> -->


If we submit the form without filling out any fields, we will see the following data in the console:

```js
{
    formFieldData: [...],
    isValid: false
}
```

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
const form = document.querySelector('#contact_form');
form.addEventListener('submitted', (event) => {
    let formData = event.detail;

    if(!formData.isValid)
        return;
    
    let formValues = {
        name: formData.formFieldData.find(x => x.name === 'name'),
        email: formData.formFieldData.find(x => x.name === 'email'),
        phoneNumber: formData.formFieldData.find(x => x.name === 'phone-number'),
        comments: formData.formFieldData.find(x => x.name === 'comments')
    };

    // send form values to the server
});
```

<ContactFormGuide />
