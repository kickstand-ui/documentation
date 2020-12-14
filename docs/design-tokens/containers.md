---
{
    "description": "Information on Kickstand UI's Container Design Tokens",
    "meta": [
        {
            "property": "og:title",
            "content": "Container Design Tokens - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "Information on Kickstand UI's Container Design Tokens"
        }
    ]
}
---

# Container Design Tokens

This is the default value for the `max-width` of your `<main>` content.

```scss
$content-width: 660px;
```

```css
:root {
    --ks-content-width: 660px;
}
```

## Usage

### SASS

```scss
.main-menu {
    max-width: $content-width;
}
```

### CSS

```css
.main-menu {
    max-width: var(--ks-content-width);
}
```

### HTML

```html
<nav class="content-width">...</nav>
```
