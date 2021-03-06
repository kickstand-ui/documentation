---
{
    "description": "Kickstand UI's alert component is designed to provide the user with contextual feedback based on a their actions.",
    "meta": [
        {
            "property": "og:title",
            "content": "Alert Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/alert.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's alert component is designed to provide the user with contextual feedback based on a their actions."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/alert.png"
        }
    ]
}
---

# Alert

Kickstand UI's alert component is designed to provide the user with contextual feedback based on a their actions.

<div class="my-lg">
    <ks-alert color="primary" class="mb-md">
        This is a <b>primary</b> alert.
    </ks-alert>
    <ks-alert color="secondary" class="mb-md">
        This is a <b>secondary</b> alert.
    </ks-alert>
    <ks-alert color="success" class="mb-md">
        This is a <b>success</b> alert.
    </ks-alert>
    <ks-alert color="info" class="mb-md">
        This is a <b>info</b> alert.
    </ks-alert>
    <ks-alert color="warning" class="mb-md">
        This is a <b>warning</b> alert.
    </ks-alert>
    <ks-alert color="danger" class="mb-md">
        This is a <b>danger</b> alert.
    </ks-alert>
    <ks-alert color="light" class="mb-md">
        This is a <b>light</b> alert.
    </ks-alert>
    <ks-alert color="dark">
        This is a <b>dark</b> alert.
    </ks-alert>
</div>

```html
<ks-alert color="primary">
    This is a <b>primary</b> alert.
</ks-alert>

<ks-alert color="secondary">
    This is a <b>secondary</b> alert.
</ks-alert>

<ks-alert color="success">
    This is a <b>success</b> alert.
</ks-alert>

<ks-alert color="info">
    This is a <b>info</b> alert.
</ks-alert>

<ks-alert color="warning">
    This is a <b>warning</b> alert.
</ks-alert>

<ks-alert color="danger">
    This is a <b>danger</b> alert.
</ks-alert>

<ks-alert color="light">
    This is a <b>light</b> alert.
</ks-alert>

<ks-alert color="dark">
    This is a <b>dark</b> alert.
</ks-alert>
```

## Notes

Notes are used for fixed messages that are always visible and used to call out important information the user should be aware of or warned about.

<div class="my-lg">
    <ks-alert color="primary" note class="mb-md">
        This is a <b>primary</b> note.
    </ks-alert>
    <ks-alert color="secondary" note class="mb-md">
        This is a <b>secondary</b> note.
    </ks-alert>
    <ks-alert color="success" note class="mb-md">
        This is a <b>success</b> note.
    </ks-alert>
    <ks-alert color="info" note class="mb-md">
        This is a <b>info</b> note.
    </ks-alert>
    <ks-alert color="warning" note class="mb-md">
        This is a <b>warning</b> note.
    </ks-alert>
    <ks-alert color="danger" note class="mb-md">
        This is a <b>danger</b> note.
    </ks-alert>
    <ks-alert color="light" note class="mb-md">
        This is a <b>light</b> note.
    </ks-alert>
    <ks-alert color="dark" note>
        This is a <b>dark</b> note.
    </ks-alert>
</div>

```html
<ks-alert color="primary" note>
    This is a <b>primary</b> note.
</ks-alert>

<ks-alert color="secondary" note>
    This is a <b>secondary</b> note.
</ks-alert>

<ks-alert color="success" note>
    This is a <b>success</b> note.
</ks-alert>

<ks-alert color="info" note>
    This is a <b>info</b> note.
</ks-alert>

<ks-alert color="warning" note>
    This is a <b>warning</b> note.
</ks-alert>

<ks-alert color="danger" note>
    This is a <b>danger</b> note.
</ks-alert>

<ks-alert color="light" note>
    This is a <b>light</b> note.
</ks-alert>

<ks-alert color="dark" note>
    This is a <b>dark</b> note.
</ks-alert>
```

## Headings

You can add some more structure to your alerts by adding a heading to your using the `header` property.

<div class="my-xl">
    <ks-alert header="Alert Heading" class="mb-xl">This is an alert with a heading.</ks-alert>
    <ks-alert header="Note Heading" note>This is an note with a heading.</ks-alert>
</div>

```html
<ks-alert header="Alert Heading">This is an alert with a heading.</ks-alert>
<ks-alert header="Note Heading" note>This is a note with a heading.</ks-alert>
```

## Icon

As you can see, alerts have a default icon to provide users who may be unable to distinguish color that the alert is important content. You can change the icon using `icon` attribute and can choose from the list of [Kickstand UI's icons](../iconography.md). You can also hide the icon using the `hide-icon` attribute.

<div class="my-xl">
    <ks-alert header="Change Icon" icon="octagon_warning_fill">Using <a href="/iconography.html">Kickstand UI's icons</a> you can change the alert icon to better fit your needs.</ks-alert>
</div>

```html
<ks-alert header="Change Icon" icon="octagon_warning_fill">...</ks-alert>
```

## Dismissible

You have the ability to show or hide a selected overlay by setting the `dismissible` property to `true`.

<div class="my-lg">
    <ks-button shows="dismissible_alert">Show Alert</ks-button>
    <ks-alert id="dismissible_alert" class="mt-xl" color="danger" header="There Was a Problem" dismissible>
        Something went terribly, terribly wrong!
    </ks-alert>
</div>

```html
<ks-button shows="dismissible_alert">Show Alert</ks-button>
<ks-alert id="dismissible_alert" color="danger" header="There Was a Problem" dismissible>
    Something went terribly, terribly wrong!
</ks-alert>
```

By default, if the alert is dismissible, it will be hidden initially. If you would like the alert to display, you can add the `display` property and it will display by default.

<div class="my-lg">
    <ks-alert header="Now You See Me" dismissible display>
        I am dismissible and you can see me initially!!!
    </ks-alert>
</div>

```html
<ks-alert header="Now You See Me" dismissible display>
    I am dismissible and you can see me initially!!!
</ks-alert>
```

## Accessibility

Alerts have `role="alert"` on the container to signal to assistive technology that they require the user???s immediate attention.

Depending on the color assigned to the warning, it will also change the politeness of the message to screen reader using the `aria-live` attribute:

| Color                  | Politeness    |
| ---------------------- | ------------- |
| `danger` and `warning` | `"assertive"` |
| all others             | `"polite"`    |

### Accessibility for Notes

Since notes are static containers for calling out important information, `role="alert"` and `aria-live` attributes are not set when the `note` property is `true`.

## Properties

| Property | Attribute | Type   | Default | Description |
| -------- | --------- | ------ | ------- | ----------- |
| `color`  | `color`   | `"danger"`, `"dark"`, `"info"`, `"light"`, `"link"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'` | the color of the button based on the theme color palette           |
| `header` | `header`  | `string`   | `undefined` | the header text for the alert            |
| `note`   | `note`    | `boolean`  | `undefined` | display alert as a note            |
| `icon`   | `icon`    | `string`  | `warning` | the icon that displays in the alert            |
| `hideIcon`   | `hide-icon`    | `boolean`  | `false` | if `true`, this will hide the icon           |
| `dismissible`   | `dismissible`    | `boolean`  | `false` | whether or not user can dismiss or hide the alert            |
| `display`   | `display`    | `boolean`  | `false` | if dismissible this will set the initial visibility           |
| `closeText`   | `close-text`    | `string`  | `undefined` | the label for the close button            |

## Methods

### Hide

Hides a selected alert.

`hide() => Promise<void>`

### Show

Shows a selected alert.

`show() => Promise<void>`
