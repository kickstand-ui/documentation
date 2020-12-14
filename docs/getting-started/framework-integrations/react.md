---
{
    "description": "A quick guide on how to integrate Kickstand UI components into your React application.",
    "meta": [
        {
            "property": "og:title",
            "content": "Add to a React Project - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "A quick guide on how to integrate Kickstand UI components into your React application."
        }
    ]
}
---

# Adding Kickstand UI to a React Project

## Add Components

Import the `applyPolyfills()` and `defineCustomElements()` functions from the Kickstand UI loader in your `index.js` file and execute them (as shown below) and you can start using Kickstand UI's components just like normal HTML elements.

```ts
import { applyPolyfills, defineCustomElements } from 'kickstand-ui/loader';
...
applyPolyfills().then(() => {
  defineCustomElements()
});
```

:::tip NOTE
React has a reputation for not playing nice with [web components](https://custom-elements-everywhere.com/). Being aware of these challenges, Kickstand UI has taken action to make sure the components are fully compatible with React. If there is an issue, please [reach out](/contact.html).
:::

## Adding Styles

### Using CSS

If you are using CSS, all you need to do is import the styles in Kickstand UI library into your `index.js` file.

```js
import 'kickstand-ui/dist/kickstand-ui/kickstand-ui.css';
```

### Using SASS

If your app isn't already configured with SASS, you will first need to install `node-sass`:

```bash
npm install -D node-sass
# or
yarn add node-sass
```

Rename `src/App.css` to `src/App.scss` and update `src/App.js` to import `src/App.scss`.

Now import Kickstand UI's styles into the `src/App.scss` file.

```css
@import '~kickstand-ui/src/scss/styles';
```
