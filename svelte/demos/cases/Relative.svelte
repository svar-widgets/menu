<script>
	import { Button, popupContainer } from "wx-svelte-core";
	import { DropDownMenu } from "../../src/index";

	const options = [
		{ id: 1, text: "Add User", subtext: "Ctrl+A" },
		{ id: 2, text: "Refresh", subtext: "Ctrl+R" },
		{ id: 3, text: "Delete User" },
	];
</script>

<div class="wrapper">
	<div class="demo-box" use:popupContainer>
		<h3>Scroll relative to container</h3>
		<p>Click on the button and try to scroll</p>
		<DropDownMenu {options}>
			<Button type="primary">Click me</Button>
		</DropDownMenu>

		<div style="height: 2000px;">&nbsp;</div>
	</div>

	<div class="spacer"></div>

	<div class="demo-box">
		<h3>Scroll relative to document</h3>
		<p>Click on the button and try to scroll</p>
		<DropDownMenu {options}>
			<Button type="primary">Click me</Button>
		</DropDownMenu>

		<div style="height: 2000px;">&nbsp;</div>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		overflow-y: auto;

		display: flex;
		flex-direction: row;
	}
	.demo-box {
		position: relative;
		margin-top: 20px;
	}
</style>
