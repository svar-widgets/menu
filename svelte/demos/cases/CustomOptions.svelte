<script>
	import { Button } from "wx-svelte-core";
	import { DropDownMenu, registerMenuItem } from "../../src/index";
	import { getTeam } from "../data";

	const styledOptions = [
		{ id: 1, text: "Add User", subtext: "Ctrl+A" },
		{ id: 2, text: "Rerfresh", subtext: "Ctrl+R" },
		{ id: 3, text: "Delete User", css: "danger" },
	];

	import ButtonMenuItem from "../items/ButtonMenuItem.svelte";
	import UserMenuItem from "../items/UserMenuItem.svelte";
	registerMenuItem("button", ButtonMenuItem);
	registerMenuItem("user", UserMenuItem);

	const options = getTeam();
</script>

<div class="demo-box">
	<h3>Styling menu options</h3>
	<p>Click the button</p>
	<DropDownMenu options={styledOptions}>
		<Button type="primary">Click me</Button>
	</DropDownMenu>
</div>

<div class="demo-box">
	<h3>Custom component as menu option</h3>
	<p>Click the button</p>
	<DropDownMenu {options}>
		<Button type="primary">Select User</Button>
	</DropDownMenu>
</div>
