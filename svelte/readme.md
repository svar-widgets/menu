<div align="center">
	
# SVAR Svelte Menu

[![npm](https://img.shields.io/npm/v/wx-svelte-menu.svg)](https://www.npmjs.com/package/@svar-ui/svelte-menu)
[![License](https://img.shields.io/github/license/svar-widgets/menu)](https://github.com/svar-widgets/menu/blob/main/license.txt)
[![npm downloads](https://img.shields.io/npm/dm/wx-svelte-menu.svg)](https://www.npmjs.com/package/@svar-ui/svelte-menuu)

</div>

<div align="center">

[Documentation](https://docs.svar.dev/svelte/core/category/menu) • [Demos](https://docs.svar.dev/svelte/core/samples-menu/#/bar/willow)

</div>

SVAR Menu is a ready to use Svelte component for creating context and popup menus. Easily customize each menu item with text, icons, and sub-items, and control the menu's position relative to its parent element.

### How to Use

To use SVAR Svelte Menu, simply import the package and include the component in your Svelte file:

```svelte
<script>
	import { Menu } from "@svar-ui/svelte-menu";

	function onClick(ev) {
		message = ev.option ? `clicked on ${ev.option.id}` : "closed";
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

<Menu {options} onclick={onClick} />
```

For more details, visit the [documentation](https://docs.svar.dev/svelte/core/category/menu).

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

### Need Help?

Join our [community forum](https://forum.svar.dev/) to get help or post feature requests.
