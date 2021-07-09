---
{
    "description": "Kickstand UI's scroll-to-top component allows users to easily return to the top of a page with an easy-to-access button.",
    "meta": [
        {
            "property": "og:title",
            "content": "Skip-To-Content - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/kickstand_card.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's scroll-to-top component allows users to easily return to the top of a page with an easy-to-access button."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/kickstand_card.png"
        }
    ]
}
---

# Skip-To-Content

Skip-to-content links are an important feature for accessible sites. It allows users skip the navigation portion of your site and go straight to the content. The idea is that you provide a hidden link at the top of your page so that when a keyboard user focuses on it, it will slide into view and let the user know they can skip to the main content.

Kickstand UI's skip-to-content feature is _technically_ not a component, but a utility class. It's as simple as adding the class `skip-to-content` to a link or button at the top of your page (the first element inside of your `body` tag) and it will slide into view as soon as the user focuses on it.

```html
<body>
    <ks-button class="skip-to-content" color="light" href="#content">Skip to Content</ks-button>
    <header>
    ...
```

<div>
    <ks-alert color="light" class="my-xl">
        <img src="/images/gifs/skip-to-content.gif" alt="animated image of the skip-to-content link sliding into view" />
    </ks-alert>
</div>
