---
{
    "description": "The Kickstand UI file form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability.",
    "meta": [
        {
            "property": "og:title",
            "content": "File Form Field Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI file form field is designed to abstract away complexity and provide a consistent user experience as well as some features to improve usability."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/form-field.png"
        }
    ]
}
---

# File

<div class="my-xl">
    <ks-form-field type="file" label="Attachments" />
</div>

```html
<ks-form-field type="file" label="Attachments" />
```

## Value

The value returned from the component is unique from the other input types as it returns a `FileList` which is an array of files that have been returned from the input. Each file will have the following properties:

```js
{
    lastModified: 'the last modified time of the file, in millisecond since the UNIX epoch',
    lastModifiedDate: 'the last modified Date of the file referenced by the File object',
    name: 'the name of the file',
    webkitRelativePath: 'the path the URL of the File is relative to',
    size: 'the size of the file in bytes',
    type: 'the MIME type of the file'
}
```

## Properties

The following properties are specific to the `file` input type.

| Property     | Attribute     | Description | Type                                               | Default     |
| ------------ | ------------- | ----------- | -------------------------------------------------- | ----------- |
| `accept` | `accept` | a comma-separated list of one or more file types, describing which file types to allow            | `string`                                          | `undefined`     |
| `multiple`   | `multiple`    | indicates if an input can have more than one value            | `boolean`                                           | `false`         |
| `webkitdirectory`   | `webkitdirectory`    | indicates that the element should let the user select directories instead of files [(read more)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory)           | `boolean`                                          | `false` |
| `capture` | `capture` | specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute [(read more)](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture)            | `'user'` or `'environment'`                                           | `undefined` |

## Usage

For more information on how to use the `form field` component and it's available configurations, check out the [documentation](./form-field.md).
