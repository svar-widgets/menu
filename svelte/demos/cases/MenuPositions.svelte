<script>
	import { Button, Segmented } from "wx-svelte-core";
	import { DropDownMenu } from "../../src/index";
	import { getOptions } from "../data";

	const options = getOptions();

	let at = $state("right");
	const modes = [
		{ id: "right", name: "right" },
		{ id: "left", name: "left" },
		{ id: "top", name: "top" },
		{ id: "bottom", name: "bottom" },
		{ id: "bottom-right", name: "bottom, right" },
		{ id: "bottom-left", name: "bottom, left" },
	];
</script>

<div class="demo-box">
	<h3>Supported menu positions</h3>
	<Segmented options={modes} bind:value={at} />

	<p>Click the button, menu will be shown at the selected position</p>

	<div class="area" style="padding-left: 200px; padding-top:100px;">
		<DropDownMenu {at} {options}>
			<Button type="primary">Click me</Button>
		</DropDownMenu>
	</div>
</div>

<style>
	.area {
		background: var(--wx-background-alt);
		padding: 12px 12px 120px 12px;
		margin-top: 12px;
		max-width: 550px;
	}
</style>
