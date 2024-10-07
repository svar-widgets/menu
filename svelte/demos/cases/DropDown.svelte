<script>
	import { Button } from "wx-svelte-core";
	import { DropDownMenu } from "../../src/index";

	import { getOptions } from "../data";

	const options = getOptions();

	let message = "";
	function clicked(ev) {
		const action = ev.detail.action;
		message = action ? `clicked on ${action.id}` : "closed";
	}
</script>

<div class="demo-status">{message}</div>

<div class="demo-box">
	<h3>Dropdown menu, default</h3>
	<DropDownMenu {options} on:click={clicked}>
		<Button type="primary">Click me</Button>
	</DropDownMenu>
</div>

<div class="demo-box">
	<h3>Dropdown menu, fit to button</h3>
	<DropDownMenu {options} at="bottom-fit" on:click={clicked}>
		<Button type="primary">Click me and check the menu size</Button>
	</DropDownMenu>
</div>

<div class="demo-box">
	<h3>Dropdown menu, right</h3>
	<DropDownMenu {options} on:click={clicked} at="right">
		<Button type="primary">Click me</Button>
	</DropDownMenu>
</div>

<div class="demo-box">
	<h3>Dropdown menu from icon</h3>
	<DropDownMenu {options} on:click={clicked} at="right">
		<Button icon="wxi-calendar" />
	</DropDownMenu>
</div>
