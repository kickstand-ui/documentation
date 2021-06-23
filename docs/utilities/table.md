---
{
    "description": "Kickstand UI's table utilities are designed to provide consistency with your table designs.",
    "meta": [
        {
            "property": "og:title",
            "content": "Table Utilities - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/table.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's table utilities are designed to provide consistency with your table designs."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/table.png"
        }
    ]
}
---

# Table Utility Classes

Kickstand UI's table utilities are designed to provide consistency with your table designs.

<div class="my-xl">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Golenface</td>
                <td>Jim Halpert</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Character</th>
            <th scope="col">Played By</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Agent Michael Scarn</td>
            <td>Michael Scott</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Golenface</td>
            <td>Jim Halpert</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Sandra</td>
            <td>Pam Halpert</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>Samuel L. Chang</td>
            <td>Dwight Schrute</td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td>Jasmine Windsong</td>
            <td>Jan Levinson</td>
        </tr>
    </tbody>
</table>
```

:::tip Scope
If you are curious about the `scope` attribute, check out the [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#The_scope_attribute) on the value they bring to your tables
:::

## Striped

To improve the readability of your data, you can apply the `striped` class to your tables and every other row in the `<tbody>` will get a darker background to provide contrast between the rows.

<div class="my-xl">
    <table class="table striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Golenface</td>
                <td>Jim Halpert</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table striped">
    ...
</table>
```

## Hover

You can provide an additional layer of focus to your rows by adding the `hover` class. This will set a darker background color for the row in the `<tbody>` that is being hovered over.

<div class="my-xl">
    <table class="table striped hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Golenface</td>
                <td>Jim Halpert</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table striped hover">
    ...
</table>
```

## Responsive

Typically, large table on small displays run over the edge of the viewport and can cause undesired effects. Wrapping the table in a `<div>` with the class `table-responsive` will hide the overflow and allow the user to scroll the content without shifting the entire page.

<div class="w-25 my-xl">
    <div class="table-responsive">
        <table class="table m-none" style="white-space: nowrap;">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Character</th>
                    <th scope="col">Played By</th>
                    <th scope="col">Real Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Agent Michael Scarn</td>
                    <td>Michael Scott</td>
                    <td>Steve Carell</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Golenface</td>
                    <td>Jim Halpert</td>
                    <td>John Krasinski</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Sandra</td>
                    <td>Pam Halpert</td>
                    <td>Jenna Fischer</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Samuel L. Chang</td>
                    <td>Dwight Schrute</td>
                    <td>Rainn Wilson</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Jasmine Windsong</td>
                    <td>Jan Levinson</td>
                    <td>Melora Hardin</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

```html
<div class="table-responsive">
    <table class="table">
    ...
    </table>
</div>
```

## Fixed Heading

If you have a long table and would like the heading of the table to follow the user down as the scroll, you can add the `fixed-heading` class to your table.

<div style="max-height: 200px; overflow-y: auto">
    <table class="table fixed-heading">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
                <th scope="col">Real Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
                <td>Steve Carell</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Golenface</td>
                <td>Jim Halpert</td>
                <td>John Krasinski</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
                <td>Jenna Fischer</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
                <td>Rainn Wilson</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
                <td>Melora Hardin</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table fixed-heading">
    ...
</table>
```

:::warning WARNING
Because of restrictions in `position: sticky` spec, the fixed heading feature will not work in a responsive table.
:::

## Fixed Column

If you have an especially table that requires horizontal scrolling, you can also fix the first column so it will follow the user as they scroll using the `fixed-column` class.

<div class="table-responsive" style="max-width: 300px; overflow-x: auto">
    <table class="table m-none fixed-column" style="white-space: nowrap;">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
                <th scope="col">Real Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
                <td>Steve Carell</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Goldenface</td>
                <td>Jim Halpert</td>
                <td>John Krasinski</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
                <td>Jenna Fischer</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
                <td>Rainn Wilson</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
                <td>Melora Hardin</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table fixed-column">
    ...
</table>
```
