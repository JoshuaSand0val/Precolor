# Powerful preprocessor tools for a accessible color palette.

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

## Color Contrast

Ensuring color is intelligible is crucial to designing a website anyone can use. If nobody can see your website, it is difficult for everyone to stay on your website.

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
// Outputs 4.5 (no-preference) and (more) 7 contrast-ratios:
@include contrast using ($ratio) {
	@debug $ratio;
}
```

## Acknowledgment
Precolor was built by Joshua Elijah Sandoval.

## License
Precolor is distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.