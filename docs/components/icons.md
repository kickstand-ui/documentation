---
{
    "description": "The Kickstand UI icon library is a compilation of commonly used icons for applications and websites.",
    "meta": [
        {
            "property": "og:title",
            "content": "Icon Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/icons.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI icon library is a compilation of commonly used icons for applications and websites."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/icons.png"
        }
    ]
}
---

# Icons

The icon component is designed to take advantage of Kickstand UI's icon library. To see a full list of available icons, check out the [iconography page](../iconography.md).

<div class="my-xl text-lg">
    <ks-icon icon="search" class="mr-lg" />
    <ks-icon icon="question" class="mr-lg" />
</div>

```html
<ks-icon icon="search"></ks-icon>
<ks-icon icon="question"></ks-icon>
```

## Labels

By default the icon will have the attribute `aria-hidden="true"` to prevent confusion with assistive technologies. If you are using icons in place of text for things like icon buttons, you can pass the text to the `label` property or the ID of the container with the text to be read using the `labelled-by` property.

<div class="my-xxl">
    <ks-button>
        <ks-icon icon="user" label="user settings"></ks-icon>
    </ks-button>
</div>

```html
<ks-button>
    <ks-icon icon="user" label="user settings"></ks-icon>
</ks-button>
```

## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `icon`   | `icon`    | the name of the icon you would like to display            | `string` | `undefined` |
| `label`      | `label`       | the label used by assistive technologies to describe the icon | `string` | `undefined` |
| `labelledBy` | `labelled-by` | the reference to a label to help assistive technologies describe the icon            | `string` | `undefined` |
