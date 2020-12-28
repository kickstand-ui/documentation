---
{
    "description": "Kickstand UI's form element has all of the same behavior a standard form element has, but with some additional features that make validation and submission easier.",
    "meta": [
        {
            "property": "og:title",
            "content": "Form Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's form element has all of the same behavior a standard form element has, but with some additional features that make validation and submission easier."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form.png"
        }
    ]
}
---

# Form

Kickstand UI's `<ks-form>` element has all of the same behavior a standard form element has, but with some additional features that make validation and submission easier.

Most of the properties (`action`, `enctype`, `method`, and `target`) are standard form attributes and you can read more about them from the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes_for_form_submission).

<div class="my-xxl">
    <ks-form>
        <ks-form-field label="Name" required></ks-form-field>
        <ks-form-field label="Email" type="email" value="bad.email"></ks-form-field>
        <ks-button type="submit">Submit Me</ks-button>
    </ks-form>
</div>

```html
<ks-form>
    <ks-form-field label="Name" required></ks-form-field>
    <ks-form-field label="Email" type="email" value="bad.email"></ks-form-field>
    <ks-button type="submit">Submit Me</ks-button>
</ks-form>
```

## Inline Forms

Occasionally there is a need to simplify forms and combine the input and submit button into a single line.

<div class="my-xxl">
    <ks-form inline>
        <ks-form-field label="Search" type="search" placeholder="Search..." hide-label></ks-form-field>
        <ks-button type="submit">
            <ks-icon icon="search" label="search"></ks-icon>
        </ks-button>
    </ks-form>
</div>

```html
<ks-form>
    <ks-form-field label="Search" type="search" placeholder="Search..." hide-label></ks-form-field>
    <ks-button type="submit">
        <ks-icon icon="search" label="search"></ks-icon>
    </ks-button>
</ks-form>
```

## Styling Forms

The form is designed to stand out from the other content in order to increase conversion. Styling forms is easy using CSS, but you can also easily do os using utility classes. The follow example removes the border, background, and padding from the form, but similar utility classes could be used to create custom form styles.

<div class="my-xxl">
    <ks-form class="p-none b-none bg-transparent" inline>
        <ks-form-field label="Search" type="search" placeholder="Search..." hide-label></ks-form-field>
        <ks-button type="submit">
            <ks-icon icon="search" label="search"></ks-icon>
        </ks-button>
    </ks-form>
</div>

```html
<ks-form class="p-none b-none bg-transparent" inline>
    <ks-form-field label="Search" type="search" placeholder="Search..." hide-label></ks-form-field>
    <ks-button type="submit">
        <ks-icon icon="search" label="search"></ks-icon>
    </ks-button>
</ks-form>
```

## Submission

In a standard HTML form, submission causes the page to reload. In Kickstand UI's forms, that behavior is prevented by default to allow for client-side validation and precessing, but if the `action` property is populated, the default behavior will resume.

To collect form data easily, a custom event emitter has been added to provide field data and validation information - `submitted`. Below is an example of the form data (type `IFormData`) provided by the event for the form above:

```js
{
    isValid: false,
    formFieldData: [
        {
            name: "name",
            value: "",
            isValid: false,
            validity: {
                badInput: false,
                customError: false,
                patternMismatch: false,
                rangeOverflow: false,
                rangeUnderflow: false,
                stepMismatch: false,
                tooLong: false,
                tooShort: false,
                typeMismatch: false,
                valid: false,
                valueMissing: true
            }
        },
        {
            name: "email",
            value: "bad.email",
            isValid: false,
            validity: {
                badInput: false,
                customError: false,
                patternMismatch: false,
                rangeOverflow: false,
                rangeUnderflow: false,
                stepMismatch: false,
                tooLong: false,
                tooShort: false,
                typeMismatch: true,
                valid: false,
                valueMissing: false
            },
        }
    ]
}
```

### Getting Form Data

Getting this data is simple as setting up a standard event listener.

```html
<ks-form id="my_form">
    <ks-form-field label="Name" required></ks-form-field>
    <ks-form-field label="Email" type="email"></ks-form-field>
    <ks-button type="submit">Submit Me</ks-button>
</ks-form>
<script>
    let myForm = document.getElementById('my_form');
    myForm.addEventListener('submitted', (e) => {
        let myFormData = e.detail;
        // do something with the form data
    });
</script>
```

:::tip Note
If you are using a JavaScript framework, your implementation may vary. Be sure to review the documentation for event listening best practices.
:::

## Validation

When the form is submitted, each of the fields will be validated. If any of the fields are invalid, the form's state will be set to "invalid" and an error message will appear at the bottom of the form. You can customize this error message using the `error-message` property.

You can also manually change the validation state of you form by using the `invalid` property.

:::warning
Client-side validation is not a replacement for server-side validation. Be sure that you also validate data coming from the client on the server to insure data integrity and the safety of your application.
:::

## Accessibility

The form itself is fairly straight forward, but one point of interest for accessibility is that the form error message is using the [`<ks-alert>`](/components/alert.html) component, which means that it has the `role="alert"` as well as the `aria-live="assertive"`.

The error message will also be accompanied by an icon for those users that are not able to distinguish the error from the colored text.

## Properties

| Property       | Attribute       | Description                                                                          | Type                                            | Default                                                                                  |
| -------------- | --------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `inline`      | `inline`       | toggles the inline layout of the form                                                   | `boolean`                                       | `false`                                                                                  |
| `action`       | `action`        | The URL that processes the form submission.                                          | `string`                                        | `undefined`                                                                              |
| `enctype`      | `enctype`       | This is the MIME type of the form submission                                         | `string`                                        | `'One or more of the from fields are not valid. Please, review the form and try again.'` |
| `errorMessage` | `error-message` | The message that displays at the footer of the form if there is a validation problem | `string`                                        | `'One or more of the from fields are not valid. Please, review the form and try again.'` |
| `invalid`      | `invalid`       | toggles the validity of the form                                                     | `boolean`                                       | `false`                                                                                  |
| `method`       | `method`        | The HTTP method to submit the form with.                                             | `"get"` or `"post"`                             | `undefined`                                                                              |
| `target`       | `target`        | Indicates where to display the response after submitting the form.                   | `"_blank"`, `"_parent"`, `"_self"`, or `"_top"` | `undefined`                                                                              |

## Events

| Event       | Description                                  | Type                     |
| ----------- | -------------------------------------------- | ------------------------ |
| `submitted` | the event emitted when the form is submitted | `CustomEvent<IFormData>` |
