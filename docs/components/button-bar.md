---
{
    "description": "Buttons are used to perform actions in forms, modals, and more. Kickstand UI buttons come with additional features that include button states, color and style variations, and best practices when dealing with links vs buttons.",
    "meta": [
        {
            "property": "og:title",
            "content": "Button Bar Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/button.png"
        },
        {
            "property": "og:description",
            "content": "Buttons are used to perform actions in forms, modals, and more. Kickstand UI buttons come with additional features that include button states, color and style variations, and best practices when dealing with links vs buttons."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/button.png"
        }
    ]
}
---

# Button Bar

The button bar component is designed to group related actions together.

<div class="my-xl">
    <ks-button-bar>
        <ks-button display="hollow">
            <ks-icon icon="chevron_left" label="previous"></ks-icon>
        </ks-button>
        <ks-button display="hollow">1</ks-button>
        <ks-button display="hollow">2</ks-button>
        <ks-button display="hollow">3</ks-button>
        <ks-button display="hollow">4</ks-button>
        <ks-button display="hollow">
            <ks-icon icon="chevron_right" label="next"></ks-icon>
        </ks-button>
    </ks-button-bar>
</div>

```html
<ks-button-bar>
    <ks-button display="hollow">
        <ks-icon icon="chevron_left" label="previous"></ks-icon>
    </ks-button>
    <ks-button display="hollow">1</ks-button>
    <ks-button display="hollow">2</ks-button>
    <ks-button display="hollow">3</ks-button>
    <ks-button display="hollow">4</ks-button>
    <ks-button display="hollow">
        <ks-icon icon="chevron_right" label="next"></ks-icon>
    </ks-button>
</ks-button-bar>
```

## Stacked

You can arrange the buttons vertically using the `stacked` property. The value is `false` by default.

<div class="my-xl">
    <ks-button-bar stacked>
        <ks-button display="hollow">Button 1</ks-button>
        <ks-button display="hollow">Button 2</ks-button>
        <ks-button display="hollow">Button 3</ks-button>
        <ks-button display="hollow">Button 4</ks-button>
    </ks-button-bar>
</div>

```html
<ks-button-bar stacked>
    <ks-button display="hollow">Button 1</ks-button>
    <ks-button display="hollow">Button 2</ks-button>
    <ks-button display="hollow">Button 3</ks-button>
    <ks-button display="hollow">Button 4</ks-button>
</ks-button-bar>
```

### Arrangement

The `display` is set to `inline-flex`, you you can use the [flex layout utility classes](../layout/flex-box.md) to quickly adjust the layout.

<div class="my-xl">
    <ks-button-bar class="w-100 space-between">
        <ks-button display="clear">Button 1</ks-button>
        <ks-button display="clear">Button 2</ks-button>
        <ks-button display="clear">Button 3</ks-button>
        <ks-button display="clear">Button 4</ks-button>
    </ks-button-bar>
</div>

```html
<ks-button-bar class="w-100 space-between">
    <ks-button display="clear">Button 1</ks-button>
    <ks-button display="clear">Button 2</ks-button>
    <ks-button display="clear">Button 3</ks-button>
    <ks-button display="clear">Button 4</ks-button>
</ks-button-bar>
```

## Split Buttons

You can combine a button and a [dropdown](./dropdown.md) to create a split button.

<div class="my-xl">
    <ks-button-bar>
        <ks-button class="b-r-xxs">Normal Button</ks-button>
        <ks-dropdown text="Expand Menu" position="right" hide-text>
            <ks-dropdown-item>
                <a href="#">Dropdown Item 1</a>
            </ks-dropdown-item>
            <ks-dropdown-item>
                <a href="#">Dropdown Item 2</a>
            </ks-dropdown-item>
            <ks-dropdown-item>
                <a href="#">Dropdown Item 3</a>
            </ks-dropdown-item>
        </ks-dropdown>
    </ks-button-bar>
</div>

```html
<ks-button-bar>
    <ks-button class="b-r-xxs">Normal Button</ks-button>
    <ks-dropdown text="Expand Menu" position="right" hide-text>
        <ks-dropdown-item>
            <a href="#">Dropdown Item 1</a>
        </ks-dropdown-item>
        <ks-dropdown-item>
            <a href="#">Dropdown Item 2</a>
        </ks-dropdown-item>
        <ks-dropdown-item>
            <a href="#">Dropdown Item 3</a>
        </ks-dropdown-item>
    </ks-dropdown>
</ks-button-bar>
```

## Properties

| Property  | Attribute | Description | Type      | Default |
| --------- | --------- | ----------- | --------- | ------- |
| `stacked` | `stacked` | determines the layout of the button bar            | `boolean` | `false` |
