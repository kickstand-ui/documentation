---
{
    "description": "A quick guide on how to integrate Kickstand UI components into your Angular application.",
    "meta": [
        {
            "property": "og:title",
            "content": "Add to an Angular Project - Kickstand UI"
        },
        {
            "property": "og:description",
            "content": "A quick guide on how to integrate Kickstand UI components into your Angular application."
        }
    ]
}
---

# Adding Kickstand UI to an Angular Project

## Adding Styles

After installing Kickstand UI, adding the styles is fairly straight forward. In your `angular.json` config file add a reference to the styles _before_ your global styles (that way your custom styles will easily override the default styles):

```json
 "styles": [
    "../node_modules/kickstand-ui/dist/kickstand-ui/kickstand-ui.css"
    "styles.css",
  ]
```

### SASS

If you are using `SASS` and customizing the default implementation, make sure your project is configured properly for it. The Angular CLI provides some tooling to help with this.

#### Angular 6+

```bash
ng config schematics.@schematics/angular:component.styleext scss
```

#### Angular < 6

```bash
# install the node-sass compiler
npm install node-sass --save-dev

# use Angular CLI to configure the project
ng set defaults.styleExt scss
```

In your main SASS file, add a reference to Kickstand UI in order to take advantage of tooling that is provided. Make sure it is referenced _before_ your custom styles:

```css
@import '~kickstand-ui/src/scss/styles';
```

_Alternately_, you can add a reference to the SASS in the `angular.json` config file _before_ your global styles (again, so that the default styles can easily be overridden):

```json
 "styles": [
    "../node_modules/kickstand-ui/src/scss/styles.scss"
    "styles.scss",
  ]
```

## Adding Components

Using Kickstand UI within an Angular CLI project is a two-step process. You will need to:

1. Include the `CUSTOM_ELEMENTS_SCHEMA` in the modules that use the components.
2. Call `defineCustomElements()` from `main.ts` (or some other appropriate place).

### Including the Custom Elements Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web components in the HTML markup without the compiler producing errors. This code should be added into the `AppModule` and in every other modules that use your custom elements.

Here is an example of adding it to `AppModule`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

:::tip NOTE
The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses custom elements.
:::

### Add Components

Import the `applyPolyfills()` and `defineCustomElements()` functions from the Kickstand UI loader in your `main.ts` file and execute them (as shown below) and you can start using Kickstand UI's components just like normal HTML elements.

```ts
import { applyPolyfills, defineCustomElements } from 'kickstand-ui/loader';
...
applyPolyfills().then(() => {
  defineCustomElements()
});
```
