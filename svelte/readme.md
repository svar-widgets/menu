### SVAR Menu for Svelte

SVAR Menu provides ready to use control for creating context and popup menus

### Useful Links

-   [Documentation](https://docs.svar.dev/svelte/core/overview)
-   [How to start guide](https://docs.svar.dev/svelte/core/getting_started/)
-   [Demos](https://docs.svar.dev/svelte/menu/samples/#/base/willow)

### License

SVAR Menu for Svelte is available under MIT license.

### How to Use

To use the widget, simply import the package and include the component in your Svelte file:

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
