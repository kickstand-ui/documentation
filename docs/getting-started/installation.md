---
{
    "description": "Installing Kickstand UI is as easy as adding a few tags to your page. You can also install it using your favorite package manager.",
    "meta":
        [
            {
                "property": "og:title",
                "content": "Installation - Kickstand UI",
            },
            {
                "property": "og:description",
                "content": "Installing Kickstand UI is as easy as adding a few tags to your page. You can also install it using your favorite package manager.",
            },
        ],
}
---

# Installation

## CDN

Installing Kickstand UI is as easy as adding a few tags to your page.

```html
<!-- global styles and utility classes -->
<link rel="stylesheet" href="https://unpkg.com/kickstand-ui/dist/kickstand-ui/kickstand-ui.css" />

<!-- scripts for browsers that support ES modules -->
<script type="module" src="https://unpkg.com/kickstand-ui/dist/kickstand-ui/kickstand-ui.esm.js"></script>
<!-- scripts for browsers that do not support ES modules (legacy browsers) -->
<script nomodule src="https://unpkg.com/kickstand-ui/dist/kickstand-ui/kickstand-ui.js"></script>
```

:::tip NOTE
For the best user experience, be sure to include both `script` tags.
:::

## Package Manager

If you are using build tools or a framework, you can add it to your project as an NPM package.

```bash
npm install --save kickstand-ui

# or

yarn add kickstand-ui
```

### Add To Your Project

```js
import { applyPolyfills, defineCustomElements } from "kickstand-ui/loader";

// Apply the polyfills and bind the custom elements to the window object
applyPolyfills().then(() => {
    defineCustomElements();
});
```

### Styles

Kickstand UI was written using [SASS](https://sass-lang.com/). Using SASS is not required to use and customize Kickstand UI for your needs, but we have created some great [SASS tools](../../design-tokens/overview.md) to really accelerate the development process. You can import them into your project from `kickstand-ui/src/scss/styles.scss`.

If you are planning on using the compiled CSS, you can find it at `kickstand-ui/dist/kickstand-ui/kickstand-ui.css`.

## Framework Integrations

<div class="display-flex flex-wrap align-center space-around my-lg">
    <a href="/getting-started/installation.html" class="mb-md">
        <ks-img lazy src="/images/frameworks/HTML5.svg" alt="HTML5" title="HTML5" style="width:80px; height:80px;" />
    </a>
    <a href="/getting-started/framework-integrations/vue.html" class="mb-md">
        <ks-img lazy src="/images/frameworks/vuejs.svg" alt="Vuejs" title="Vuejs" style="width:100px; height:80px;" class="p-md" />
    </a>
    <a href="/getting-started/framework-integrations/react.html" class="mb-md">
        <ks-img lazy src="/images/frameworks/react.svg" alt="React" title="React" style="width:120px; height:80px;" />
    </a>
    <a href="/getting-started/framework-integrations/angular.html" class="mb-md">
        <ks-img lazy src="/images/frameworks/angular.svg" alt="Angular" title="Angular" style="width:80px; height:80px;" />
    </a>
    <a href="/getting-started/framework-integrations/ember.html" class="mb-md">
        <ks-img lazy src="/images/frameworks/ember.svg" alt="Ember" title="Ember" style="width:100px; height:80px;" class="pt-xl" />
    </a>
</div>

Kickstand UI is built with native web components which makes it framework agnostic! You can implement it in any of your projects regardless of the framework you are using.

<div class="my-lg text-center">
    <ks-button display="hollow" href="/getting-started/framework-integrations/overview.html">Add To Your Project</ks-button>
</div>
