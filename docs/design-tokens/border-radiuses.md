---
{
    "description": "Information on Kickstand UI's Border Radius Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Border Radius Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Border Radius Design Tokens"
        }
    ]
}
---

# Border Radiuses

These are pretty straight forward. This is a way to keep your rounded corners consistent throughout your application.

```scss
$border-radiuses: (
    none: 0,
    sm: 0.25rem, // 4px
    md: 0.5rem,  // 8px
    lg: 0.75rem, // 12px
    pill: 10rem, // 160px
    circle: 50%,
) !default;
```

```css
:root {
    --ks-border-radius-none: 0;
    --ks-border-radius-sm: 0.25rem;
    --ks-border-radius-md: 0.5rem;
    --ks-border-radius-lg: 0.75rem;
    --ks-border-radius-xl: 1rem;
    --ks-border-radius-pill: 10rem;
    --ks-border-radius-circle: 50%;
}
```

## Usage

### SASS

The mixins use an abbreviation syntax that is designed for developer efficiency.

Abbreviation | Meaning
-- | --
`br(lg)` | border radius - all corners (large)
`br-t(lg)` | border radius - top (large)
`br-tl(lg)` | border radius - top left (large)
`br-tr(lg)` | border radius - top right (large)
`br-b(lg)` | border radius - bottom (large)
`br-bl(lg)` | border radius - bottom left (large)
`br-br(lg)` | border radius - bottom right (large)
`br(pill)` | border radius (pill)
`br(circle)` | border radius (circle)

::: tip NOTE
For `circle` and `pill`, as the aspect ratios change for the object you are adding border radiuses to, you may get different results than you expected.

See how the two compare when they are be added to a _square_ rather than a _rectangle_:

<div class="display-flex space-between text-center mb-md">
    <div title="radius(pill)" style="width:100px;height:100px;" class="br-pill bg-light-lighter b-xxs pt-xxxl">radius(pill)</div>
    <div title="radius(pill)" style="width:200px;height:100px;" class="br-pill bg-light-lighter b-xxs pt-xxxl">radius(pill)</div>
    <div title="radius(circle)" style="width:100px;height:100px;" class="br-circle bg-light-lighter b-xxs pt-xxxl">radius(circle)</div>
    <div title="radius(circle)" style="width:200px;height:100px;" class="br-circle bg-light-lighter b-xxs pt-xxxl">radius(circle)</div>
</div>
:::

#### Example

```scss
.button {
    @include br(sm);
}


.tabs {
    .tab {
        // round the top of the tab but leave the bottom square
        @include br-t(md);
    }
}
```

#### Parameters

Name | Type | Default Value | Description
-- | -- | -- | --
$size | string | required | the size of the border radius based on the `border-radiuses` values defined in the `variables` file
$important | bool | false | determines whether or not the `!important` property is added to the css rule

#### `!important`

Setting the `!important` property on your rules is as simple as adding another value to your your mixin - `br(lg, true)`.

### CSS

```css
.button {
    border-radius: var(--ks-border-radius-md);
}
```
