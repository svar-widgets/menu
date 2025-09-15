<script>
	import { Button } from "@svar-ui/svelte-core";
	import { MenuBar, DropDownMenu } from "../../src/index";
	import { getMenuBarOptions } from "../data";

	const options = [
		{ id: 1, text: "Add User", subtext: "Ctrl+A" },
		{ id: 2, text: "Refresh", subtext: "Ctrl+R" },
		{ id: 3, text: "Delete User" },
	];
	const options1 = [
		{ id: 1, text: "Add User", subtext: "Ctrl+A" },
		{ id: 2, text: "Refresh", subtext: "Ctrl+R" },
		{ id: 3, text: "Delete User", css: "danger" },
	];

	const options2 = getMenuBarOptions();
</script>

<div class="demo-box">
	<h3>Style for menu bar</h3>
	<MenuBar css={"custom-bar"} menuCss={"custom-menu"} options={options2} />
</div>
<div class="demo-box">
	<h3>Style for dropdown menu</h3>
	<DropDownMenu {options} css={"custom-menu"}>
		<Button type="primary">Click me</Button>
	</DropDownMenu>
</div>
<div class="demo-box">
	<h3>Style for menu item</h3>
	<DropDownMenu options={options1}>
		<Button type="primary">Click me</Button>
	</DropDownMenu>
</div>

<style>
	:global(.wx-item.danger span) {
		color: var(--wx-color-danger) !important;
	}

	:global(.wx-menu.custom-menu) {
		background-color: #e4fdfc;
	}
	:global(.wx-menu.custom-menu .wx-item) {
		background-color: #e4fdfc;
		color: #2c2f3c;
	}
	:global(.wx-menu.custom-menu .wx-value) {
		color: #2c2f3c;
	}
	:global(.wx-menu.custom-menu .wx-item:hover) {
		background-color: #fff;
	}

	:global(.wx-menubar.custom-bar) {
		background-color: #e4fdfc;
		border: 1px solid #e6e6e6;
	}
	:global(.wx-menubar.custom-bar .wx-item) {
		color: #2c2f3c;
	}
	:global(.wx-menubar.custom-bar .wx-item:hover) {
		background-color: #fff;
	}
	:global(.wx-menubar.custom-bar .wx-active) {
		background-color: #fff;
	}
</style>
