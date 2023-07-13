# Powerful preprocessor tools for an accessible color palette.

**Add it to your project now via installation by NPM:**

```bash
npm install precolor --save-dev
```

---

## What is Precolor?
Precolor is a collection of CSS color manipulation tools written in SASS/SCSS. Purposely designed to reduce CSS color complexity and increase accessibility on the web.

## Prerequisite Installation

### Step 1: Install NPM

To begin, you will need NPM (Node Package Manager).  
Here is an [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm).

### Step 2: Install Sass

Once you have NPM installed, installation of Sass is easy.  
Run the following terminal command:

```bash
npm install -g sass
```

**You're all set!**

## Getting Started

### Installation

Navigate to the root directory of your project of choice.  
Run the following command:

```bash
npm install precolor --save-dev
```

This will install Precolor locally in the directory `node_modules/precolor/`.

### Importing

#### Forwarding & Configuration

Import the package with the Sass `@forward` rule in a new file named `_precolor.scss`.

```scss
@forward "node_modules/precolor/";
```

In addition to being a accessible entry point: `@forward` allows for the configuration of a module's `!default` variables.

```scss
@forward "node_modules/precolor/" with (
	$variable: value !default,
	...
);
```

*The `!default` flag after the variable value is optional, but it allows further configuration by other stylesheets.*

#### Using & Namespacing

Use the package with the Sass `@use` rule in a new file named `styles.scss`.

```scss
@use "precolor" as color;
```

In the example above: `color` is the namespace of the module. Members of the module can be accessed by prepending `color.`. Ex: `color.$primary`.

*You can omit the namespace using `*` (wildcard).*

## Default Colors

Having a consistent color palette is critical to visual design. Precolor provides defaults based on CSS named colors, as well as a more deliberate and concise palette.

| Color Palette | Description | RGB Hex Value | CSS Named Color |
| ------------- | ----------- | ------------- | --------------- |
| `$primary` | The most frequent color used. It represents primary user-interface elements. | `#5490b8` | `$blue` |
| `$secondary` | Optional secondary color used to accent user-interface elements. | `#727C83` | `$gray` |
| `$success` | Represents when a user action has been successful. | `#74bf80` | `$green` |
| `$danger`	| Represents a critical action or failure. | `#EF6461` | `$red` |
| `$warning` | Represents a potentially dangerous user action. | `#FFCB47` | `$yellow` |
| `$info` | Represents information to the user. | `#6bcee7` | `$cyan` |
| `$light` | The primary light color. Commonly used for backgrounds. | `#FBFBFB` | `$white` |
| `$dark` | The primary dark color. Commonly used for backgrounds. | `#18181C` | `$black` |
||| `#c9c8d6` | `$silver` |
||| `#b91c68` | `$maroon` |
||| `#F47C98` | `$pink` |
||| `#b350ed` | `$purple` |
||| `#9892C8` | `$indigo` |
||| `#df11af` | `$fuchsia` |
||| `#00ff6e` | `$lime` |
||| `#389269` | `$olive` |
||| `#EE8434` | `$orange` |
||| `#BB946C` | `$brown` |
||| `#00305f` | `$navy` |
||| `#2a9186` | `$teal` |
||| `$cyan` | `$aqua` |

## Color Schemes

Differing color schemes can improve your website's visibility during certain times of the day. It is a great quality of life feature!

### Color Schemes (Mixin)

Mixin `color-schemes` builds `prefers-color-scheme` media queries using differing colors.

```scss
@include color-schemes($light: $light, $dark: $dark)
```

**Usage & Parameters:**

Each parameter represents a value for the `prefers-color-scheme` media query:

1. `$light` - The light (default) color.
2. `$dark` - The dark color.

```scss
// Outputs color $light and $dark:
@include color-schemes using ($color) {
	@debug $color;
}
```

### Light (Mixin)

Mixin `light` builds a `prefers-color-scheme` media query for users requesting light mode.

```scss
@include light {
	...
}
```

### Dark (Mixin)

Mixin `dark` builds a `prefers-color-scheme` media query for users requesting dark mode.

```scss
@include dark {
	...
}
```

## Color Contrast

Ensuring color is intelligible is crucial to designing a website anyone can use. If nobody can see your website, it is difficult for everyone to stay on your website.

### High Contrast

Function `high-contrast` narrows down a `$color-list` to the **first** color that is **closest** to the `$target` contrast-ratio compared to `$background`.

```scss
high-contrast($color-list, $background, $target: 21);
```

**Usage & Parameters:**

1. `$color-list` - The color set to be compared.
2. `$background` - The color to compare contrast against.
3. `$target` - The contrast-ratio value to be met.

```scss
// Outputs the color blue:
@debug high-contrast(red green blue, white);
```

### Contrast Color

Function `contrast-color` filters a `$color-list` using the `high-contrast` function and defaults to tint the color to meet the `$target` contrast-ratio compared to `$background`.

```scss
contrast-color($color-list, $background, $target: 7);
```

**Usage & Parameters:**

1. `$color-list` - The color set to be compared.
2. `$background` - The color to compare contrast against.
3. `$target` - The contrast-ratio value to be met.

```scss
// Outputs the color green:
@debug contrast-color(red green blue, white, 4.5);
```

### Contrast Ratio

Function `contrast-ratio` gets the contrast-ratio between two colors.

```scss
contrast-ratio($color1, $color2);
```

**Usage & Parameters:**

1. `$color1` - First color value.
2. `$color2` - Second color value.


```scss
// Outputs the number 21:
@debug contrast-ratio(white, black);
```

### A11y (Accessibility)

Function `a11y` returns a contrast-ratio value associated with accessibility `$keywords`.

```scss
a11y($keywords);
```

**Usage & Parameters:**

1. `$keywords` - An unquoted string of accessibility keywords.  
Defaults to `7`. Can accept a number.

```scss
// Outputs the number 4.5:
@debug a11y(aa);
@debug a11y(aaa large);
// Outputs the number 3:
@debug a11y(aa large);
@debug a11y(aa ui);
// Outputs the number 7:
@debug a11y(aaa);
```

### Contrast (Mixin)

Mixin `contrast` builds `prefers-contrast` media queries using differing preferences.

```scss
@include contrast($no-preference: aa, $more: aaa, $less: null, $custom: null)
```

**Usage & Parameters:**

Each parameter represents an `a11y` function value for the `prefers-contrast` media query:

1. `$no-preference` - The default value.
2. `$more` - High contrast value.
3. `$less` - Less contrast value.
4. `$custom` - None of the above. The client has requested a custom palette by users of `forced-colors: active`.

```scss
// Outputs contrast-ratios 4.5 (no-preference) and 7 (more):
@include contrast using ($ratio) {
	@debug $ratio;
}
```

## Acknowledgment
Precolor was built by Joshua Elijah Sandoval.

## License
Precolor is distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.