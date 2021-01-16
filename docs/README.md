---
home: true
# heroImage: /hero.png
heroText: 
tagline: 
# actionText: Get Started →
# actionLink: /guide/
footer: Kickstand UI | MIT Licensed
---
<div class="home-hero display-flex flex-column align-center justify-center bg-light-light full-width py-xxl mb-xxxl px-lg">
    <div class="text-light-lighter text-center">
        <h1 class="text-xxl mb-xs">Kickstand UI</h1>
        <h2 class="border-none text-md text-bolder text-md">The Design System You Can Use <em><u>Everywhere</u></em>!</h2>
    </div>
    <h3 class="text-xxl text-light-lighter md:text-lg sm:text-md text-center mt-lg mb-xxl w-60 md:w-80 sm:w-90 text-center mx-auto" style="line-height: 1.2; font-weight: 200;">
        Tools to help you build applications <em class="b-b-xxxs b-b-light-lighter">everyone</em> can love!
    </h3>
    <div class="text-center my-xl">
        <ks-button size="lg" display="hollow" class="mr-xl" color="light" css-class="text-light-lighter" href="https://github.com/break-stuff/kickstand-ui">
            <ks-icon icon="github" class="mr-sm"></ks-icon> GitHub
        </ks-button>
        <ks-button size="lg" color="light" href="/getting-started/installation.html">
            Start Building <ks-icon icon="arrow_right" class="ml-xs"></ks-icon>
        </ks-button>
    </div>
</div>

## Quick Start

Adding Kickstand UI to your project is as easy as adding a few tags to your project.

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

### Start Using

Now you have access to the tools and can start adding components to your project!

```html
<ks-button shows="test_modal">Show Modal</ks-button>
<ks-modal id="test_modal" modal-title="Kickstand UI">A modal with just 2 lines of code!</ks-modal>
```

<div class="my-xl">
    <ks-button shows="test_modal">Show Modal</ks-button>
    <ks-modal id="test_modal" modal-title="Kickstand UI">A modal with just 2 lines of code!</ks-modal>
</div>

Check out our [documentation](/getting-started/installation.html) for more in-depth instructions on adding it to your project.

## _Extremely_ Performant

Kickstand UI is built using web components, so no additional JavaScript frameworks are necessary to run it. In addition to that, components are lazy-loaded in modern browsers, so the initial payload is only `7KB` of JavaScript and `13KB` of CSS!

As you use components throughout your application, the HTML, JavaScript, and CSS will only be loaded when it is used, so you only load what you need.

<p class="text-center my-xxl">
    <em>(These are the <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> scores for this site!)</em>
    <br>
    <ks-img class="w-50 md:w-60 xs:w-100 mx-auto b-xxxs mb-sm" src="/images/screen_shots/performance-min.png" alt="Kickstand UI's Lighthouse score" lazy />
</p>

## User Experience (UX) and Accessibility

The Kickstand UI framework is designed to make your application as usable as possible regardless of the user's circumstances. Great effort has gone into ensuring that content has sufficient color contrast, proper HTML semantics, appropriate `roles` and `aria` attributes, as well as ensuring the overall design and aesthetics make the components easy to use and interact with.

In the documentation for each of the components, there is an _Accessibility_ section with all of the relevant information about any features that have been added to make the component more accessible and any information you should know to ensure your application is accessible.

If you feel that an improvement can be made to provide a better user experience or better accessibility, please [**reach out**](./contact.md).

## Developer Experience (DX)

One of the priorities of Kickstand UI is to make creating applications as effortless as possible to developers and content creators while keeping it flexible enough to meet your needs. You should be able to prototype and develop feature-rich applications with very little custom code. However, if you need to customize the framework, you can add custom design tokens and CSS to get the look and feel you are looking for.

**Kickstand 2.0** now uses _CSS Variables_ to standardize all design tokens across your application!

<div class="my-lg text-center">
    <ks-button display="hollow" href="/design-tokens/overview.html">Customize Your Project</ks-button>
</div>

## Browser Support

<div class="display-flex flex-wrap space-around my-lg">
    <ks-img lazy src="/images/browsers/chrome.png" alt="Chrome" title="Chrome" style="width:64px; height:64px;" />
    <ks-img lazy src="/images/browsers/chromium_logo.svg" alt="Chromium" title="Chromium" style="width:64px; height:64px;" />
    <ks-img lazy src="/images/browsers/firefox-logo.svg" alt="Firefox" title="Firefox" style="width:64px; height:64px;" />
    <ks-img lazy src="/images/browsers/safari.svg" alt="Safari" title="Safari" style="width:64px; height:64px;" />
    <ks-img lazy src="/images/browsers/opera.png" alt="Opera" title="Opera" style="width:64px; height:64px;" />
    <ks-img lazy src="/images/browsers/edge.svg" alt="Edge" title="Edge" style="width:64px; height:64px;" />
    <ks-img lazy src="/images/browsers/internet_explorer.png" alt="Internet Explorer 11" title="Internet Explorer 11" style="width:64px; height:64px;" />
</div>

All of Kickstand UI's components are built using standards-based [web components](https://www.webcomponents.org/introduction). Browser support has greatly improved over the years. For features that are not fully supported, polyfills have been added (which will be included as-needed) to provide a great experience no matter what browser you are using.

Supported browsers include:

- **Chrome**
- **Chromium-based browsers** (this includes browsers like _Brave_, the new _Microsoft Edge_, and _Vivaldi_)
- **Firefox**
- **Safari**
- **Opera**
- **Microsoft Edge** (legacy)
- **Internet Explorer 11**

## Framework Support

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
    <ks-button display="hollow" href="/getting-started/installation.html">Add To Your Project</ks-button>
</div>
