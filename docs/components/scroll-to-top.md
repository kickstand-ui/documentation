---
{
    "description": "Kickstand UI's scroll-to-top component allows users to easily return to the top of a page with an easy-to-access button.",
    "meta": [
        {
            "property": "og:title",
            "content": "Scroll-To-Top Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/button.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's scroll-to-top component allows users to easily return to the top of a page with an easy-to-access button."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/button.png"
        }
    ]
}
---

# Scroll-To-Top

Kickstand UI's scroll-to-top component allows users to easily return to the top of a page with an easy-to-access button.

<div>
    <ks-scroll-to-top>
        <ks-icon icon="chevron_up" label="scroll to top" class="text-lg"></ks-icon>
    </ks-scroll-to-top>
</div>

```html
<ks-scroll-to-top>
    <ks-icon icon="chevron_up" label="scroll to top" class="text-lg"></ks-icon>
</ks-scroll-to-top>
```

## Content

As you can see, the component is very flexible as to what content you want to include in the button. You can include an icon (as shown above), text, or even an image.

## Button Styles

The properties `color`, `display`, and `size` all correlate with the attributes of the [Button component](./button.md). This will help keep the button style inline with the existing design conventions of your site.

## Threshold

When you are at the top of the page the button is hidden by default. The `threshold` property allows you to control how far down the user needs to scroll before the button will display. Once the user hits the threshold, the button will display in the lower right corner of the screen.

| Property    | Attribute   | Description | Type                                                                                            | Default     |
| ----------- | ----------- | ----------- | ----------------------------------------------------------------------------------------------- | ----------- |
| `color`     | `color`     | the color of the button            | "danger", "dark", "info", "light", "primary", "secondary", "success", "warning" | 'primary' |
| `display`   | `display`   | the display type of the button            | "clear", "hollow", "link", "solid"                                                      | 'solid'   |
| `size`      | `size`      | the size of the button            | "lg", "md", "sm", "xl", "xs"                                                          | 'md'      |
| `threshold` | `threshold` | how far the user needs to scroll down the page before the button displays            | `number`                                                                                        | `100`       |
