---
{
    "description": "Information on Kickstand UI's Border Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Border Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Border Design Tokens"
        }
    ]
}
---

# Border Design Tokens

## Default Border

The default border variable is a little unique from the other variables in that it uses values from other variables. For example, the `size` uses values from the [`$spacing-sizes`](./spacing.md) variable and the `color` variable uses values from the [`$colors`](./colors.md) variable.

```scss
$border: (
    style: solid,
    size: xxxs,   // from $spacing-sizes
    color: light, // from $colors
);
```

```css
:root {
    --ks-default-border: solid var(--ks-spacing-size-xxxs) rgba(var(--ks-color-light-base), 1);
}
```

## Usage

### SASS Mixins

Abbreviation | Meaning
-- | --
b() | border - all sides
b-x() | border - left and right
b-y() | border - top and bottom
b-t() | border - top
b-l() | border - left
b-r() | border - right
b-b() | border - bottom

### Example

<div class="display-flex flex-wrap space-between -m-sm mt-md">
    <div class="shadow-xs border border-xs bg-white w-25 p-sm m-sm">
        <div>b()</div>
    </div>
    <div class="shadow-xs border-x border-xs bg-white w-25 p-sm m-sm">
        <div>b-x()</div>
    </div>
    <div class="shadow-xs border-y border-xs bg-white w-25 p-sm m-sm">
        <div>b-y()</div>
    </div>
    <div class="shadow-xs border-l border-xs bg-white w-25 p-sm m-sm">
        <div>b-l()</div>
    </div>
    <div class="shadow-xs border-r border-xs bg-white w-25 p-sm m-sm">
        <div>b-r()</div>
    </div>
    <div class="b-xs border-t border-xs bg-white w-25 p-sm m-sm">
        <div>border-t()</div>
    </div>
    <div class="shadow-xs border-b border-xs bg-white w-25 p-sm m-sm">
        <div>b-b()</div>
    </div>
</div>

```scss
.border {
    @include b();
}

.border-left-and-right {
    @include b-x();
}

.border-top-and-bottom {
    @include b-y();
}

.border-left {
    @include b-l();
}

.border-right {
    @include b-r();
}

.border-top {
    @include b-t();
}

.border-b {
    @include b-b();
}

```

## Parameters

The mixin can accept additional parameters in order to override the default settings.

Name | Type | Default Value | Description
-- | -- | -- | --
$style | string | `$border-style` | Determines the style of the borer - (`solid`, `dashed`, etc.)
$size | string | `$border-size` | The width of the border - (`xs`, `sm`, `md`, etc.)
$color | string | `$border-color` | The base color of the border - (`primary`, `dark`, `light`, etc.)
$variant | string | `base` (if not defined in `$border-color`) | This variation of the border color - (`lighter`, `light`, `darker`, etc.)
$opacity | decimal | `1` (if not defined in `$border-color`) | The opacity of the color - (a number between 0 and 1)
$important | bool | false | determines whether or not the `!important` property is added to the css rule

### Example

<div style="line-height: 1;" class="display-flex space-between -m-xs mt-sm">
    <div style="border-style:dashed;" class="shadow-xs border border-xxs m-xs p-sm">
        <div>border(dashed, xxs)</div>
    </div>
    <div style="border-style:dotted" class="shadow-xs border border-xs m-xs p-sm">
        <div>border(dotted, xs)</div>
    </div>
    <div class="shadow-xs border-l border-md border-primary m-xs p-sm">
        <div>border-l(solid, md, primary)</div>
    </div>
</div>

```scss
.dashed {
    @include b(dashed, xxs);
}

.dotted {
    @include b(dotted, xs);
}

.solid {
    @include b-l(solid, md, primary);
}
```

## `!important`

The last parameter in this mixin is `$important` and defining all of the parameters just to make your style `!important` may seem a bit tedious - `b-l(solid, md, primary, base, 1, true)`. Don't worry! You can pass in a named parameter as a shortcut: `b(dashed, $important: true);`.
