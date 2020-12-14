---
{
    "description": "Information on Kickstand UI's Spacing Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Spacing Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Spacing Design Tokens"
        }
    ]
}
---

# Spacing Design Tokens

## Line Height

The `$line-height-base` is a way to globally set the line-height (space between each line of text) property. For readability purposes, it has been defaulted to `1.5`. Mozilla (MDN) provides some excellent documentation on [line-height and how to use it](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height).

```scss
$line-height-base: 1.5;
```

```css
:root {
    --ks-line-height-base: 1.5;
}
```

### Usage

This value is usually only used once on the `body` element to globally define the standard.

```css
body {
    line-height: var(--ks-line-height-base);
}
```

## Spacing Sizes

The spacing variables control things like _padding_ and _margins_ for your site. At first you may think that globally restricting these properties is extremely limiting, but it actually makes development so much simpler when you're not always pixel counting or doing math to get things to line up properly. It's also nice to know that because they are using `rem`'s for their units, it will scale with your other content as users zoom or adjust their font sizes.

```scss
$spacing-sizes: (
    auto: auto,
    none: 0,
    xxxs: 0.0625rem, // 1px
    xxs: 0.125rem,   // 2px
    xs: 0.25rem,     // 4px
    sm: 0.5rem,      // 8px
    md: 0.75rem,     // 12px
    lg: 1rem,        // 16px
    xl: 1.25rem,     // 20px
    xxl: 1.5rem,     // 24px
    xxxl: 2rem       // 32px
);
```

```css
:root {
    --ks-spacing-size-auto: auto;
    --ks-spacing-size-none: 0;
    --ks-spacing-size-xxxs: 0.0625rem;
    --ks-spacing-size-xxs: 0.125rem;
    --ks-spacing-size-xs: 0.25rem;
    --ks-spacing-size-sm: 0.5rem;
    --ks-spacing-size-md: 0.75rem;
    --ks-spacing-size-lg: 1rem;
    --ks-spacing-size-xl: 1.25rem;
    --ks-spacing-size-xxl: 1.5rem;
    --ks-spacing-size-xxxl: 2rem;
}
```

### Usage

#### SASS Mixins

The spacing mixins make using your design tokens to create consistent _margins_ and _padding_ incredibly simple.

##### Padding

The available padding mixins are a s follows:

- `p()`  - padding for all four sides of element
- `pt()` - padding-top
- `pl()` - padding-left
- `pr()` - padding-right
- `px()` - padding-left and padding-right
- `py()` - padding-top and padding-bottom

##### Margin

The available margin mixins are a s follows:

- `m()`  - margin for all four sides of element
- `mt()` - margin-top
- `ml()` - margin-left
- `mr()` - margin-right
- `mx()` - margin-left and margin-right
- `my()` - margin-top and margin-bottom

##### Example

```scss
.card {
    @include p(lg);

    .card-header {
        @include mb(md);
    }

    .card-body {
        @include mb(md);
    }

    .card-footer {
        .button {
            @include px(lg);
            @include py(sm);
        }
    }
}
```

The mixins can also take in negative values to create negative margins.

```scss
.search-icon {
    ...
    @include ml(-xxl); // This will shift the icon to the left 1.5rem
}
```

##### `!important`

Setting the `!important` property on your rules is as simple as adding another value to your your mixin - `mb(lg, true)`. For mixins that accept more than one parameter, you can use a named parameter to bypass having to define all of the properties - `m(lg, $important: true)`;

:::tip NOTE
Be sure to check out the `margin` and `padding` [utility classes](../utilities/spacing.md) that allow you to adjust layouts and spacing directly in your markup.
:::

#### SASS Functions

The `spacing` function allows you to use the spacing values with more flexibility.

```scss
.alert {
    border-left: solid color-value(primary) spacing(sm);
}
```

The function can also take negative values.

```scss
.negative-margin {
    margin-left: spacing(-sm);
}
```

#### CSS

Using the same example from above:

```css
.card {
    padding: var(--ks-spacing-size-lg);
}

.card .card-header {
    margin-bottom: var(--ks-spacing-size-md);
}

.card .card-body {
    margin-bottom: var(--ks-spacing-size-md);
}

.card .card-footer .button {
    padding: var(--ks-spacing-size-sm) var(--ks-spacing-size-lg);
}
```
