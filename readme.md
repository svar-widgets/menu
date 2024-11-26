<div align="center">
	
# SVAR Svelte Menu

[![npm](https://img.shields.io/npm/v/wx-svelte-menu.svg)](https://www.npmjs.com/package/wx-svelte-menu)
[![License](https://img.shields.io/github/license/svar-widgets/menu)](https://github.com/svar-widgets/menu/blob/main/license.txt)
[![npm downloads](https://img.shields.io/npm/dm/wx-svelte-menu.svg)](https://www.npmjs.com/package/wx-svelte-menu)

</div>

<div align="center">

[Documentation](https://docs.svar.dev/svelte/core/category/menu) • [Demos](https://docs.svar.dev/svelte/core/samples-menu/#/bar/willow)

</div>


SVAR Menu is a ready to use Svelte component for creating context and popup menus. Easily customize each menu item with text, icons, and sub-items, and control the menu's position relative to its parent element.

### Versions for Svelte 4 and 5

There are two versions of the Menu component: 
- version **1.x** was designed to work with Svelte 4
- version **2.x** is created for Svelte 5 (please note that this version is in beta and may contain some instabilities)

To use the SVAR Menu v.2.0 beta for Svelte 5, install it as follows:

```
npm install wx-svelte-menu
```

To use the SVAR Core for Svelte 4:

```
npm install wx-svelte-menu@1.3.0
```

### How to Use

To use SVAR Svelte Menu, simply import the package and include the component in your Svelte file:

```svelte
<script>
	import { Menu } from "wx-svelte-menu";

	function onClick(item) {
		const action = ev.detail.action;
		message = action ? `clicked on ${action.id}` : "closed";
	}

	const options = [
		{ id: "edit-cut", text: "Cut", icon: "wxi wxi-content-cut" },
		{ id: "edit-copy", text: "Copy", icon: "wxi wxi-content-copy" },
		{
			id: "edit-paste",
			text: "Paste",
			icon: "wxi wxi-content-paste",
		},
	];
</script>

<Menu {options} on:click={clicked} />
```

### How to Modify

Typically, you don't need to modify the code. However, if you wish to do so, follow these steps:

1. Run `yarn` to install dependencies. Note that this project is a monorepo using `yarn` workspaces, so npm will not work
2. Start the project in development mode with `yarn start`

### Run Tests

To run the test:

1. Start the test examples with:
    ```sh
    yarn start:tests
    ```
2. In a separate console, run the end-to-end tests with:
    ```sh
    yarn test:cypress
    ```
