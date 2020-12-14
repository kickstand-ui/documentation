---
{
    "description": "Information on Kickstand UI's Shadow Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Shadow Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Shadow Design Tokens"
        }
    ]
}
---

# Shadow Design Tokens

Shadows can add very attractive depth and interaction to your design. Keeping them consistent from one component to another can be a little frustrating. They can also create a great deal of clutter in your code. Abstracting them into a reusable place and using them with the `shadow()` mixin and CSS variables will keep your UI consistent and your code clean.

```scss
$shadows: (
    none: none,
    inner: "inset 1px 2px 4px rgba(0, 0, 0, 0.10)",
    outline: "0 0 0 3px rgba(0, 0, 0, 0.5)",
    xs: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    sm: "0 3px 5px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
    md: "0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)",
    lg: "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 40px rgba(0, 0, 0, 0.20)",
) !default;
```

```css
:root {
    --ks-shadow-none: none;
    --ks-shadow-outline: 0 0 0 2px rgba(0,0,0,0.5);
    --ks-shadow-inner: inset 1px 2px 4px rgba(0,0,0,0.1);
    --ks-shadow-xs: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
    --ks-shadow-sm: 0 3px 5px rgba(0,0,0,0.15),0 2px 4px rgba(0,0,0,0.12);
    --ks-shadow-md: 0 10px 20px rgba(0,0,0,0.15),0 3px 6px rgba(0,0,0,0.1);
    --ks-shadow-lg: 0 15px 25px rgba(0,0,0,0.15),0 5px 10px rgba(0,0,0,0.05);
    --ks-shadow-xl: 0 20px 40px rgba(0,0,0,0.2);
}
```

<div class="display-flex flex-column">
    <div class="my-xxl display-flex space-between">
        <div class="p-sm b-xxxs shadow-none">shadow(none)</div>
        <div class="p-sm b-xxxs shadow-outline">shadow(outline)</div>
        <div class="p-sm b-xxxs shadow-inner">shadow(inner)</div>
        <div class="p-sm b-xxxs shadow-xs">shadow(xs)</div>
    </div>
    <div class="my-xxl display-flex space-between">
        <div class="p-sm b-xxxs shadow-sm">shadow(sm)</div>
        <div class="p-sm b-xxxs shadow-md">shadow(md)</div>
        <div class="p-sm b-xxxs shadow-lg">shadow(lg)</div>
        <div class="p-sm b-xxxs shadow-xl">shadow(xl)</div>
    </div>
</div>

## Usage

### SASS

```scss
button {
    @include shadow(sm);

    &:hover {
        @include shadow(md);
    }
}
```

### CSS

```css
button {
    box-shadow: var(--ks-shadow-sm);
}

button:hover {
    box-shadow: var(--ks-shadow-md);
}
```
