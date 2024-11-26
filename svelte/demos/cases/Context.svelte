<script>
	import { ContextMenu } from "../../src/index";
	import { getOptions } from "../data";

	const options = getOptions();

	let message = $state("");
	function clicked(ev) {
		const action = ev.action;
		message = action ? `clicked on ${action.id}` : "closed";
	}
</script>

<div class="demo-status">{message}</div>

<div class="demo-box">
	<h3>Right click menu</h3>
	<ContextMenu {options} onclick={clicked} at="point">
		<div class="box">Click me (menu at cursor)</div>
	</ContextMenu>
</div>

<div class="demo-box">
	<h3>Nested context menus</h3>
	<ContextMenu {options} onclick={clicked} at="point">
		<div class="double-box" style="padding:20px; background: #ddd">
			Click me (outer menu)
			<br />
			<ContextMenu
				options={[{ id: "inner", text: "inner menu" }]}
				onclick={clicked}
				at="right"
			>
				<span
					style="display: inline-block; width: 150px; padding:10px; background: #fff;"
					>(inner menu)</span
				>
			</ContextMenu>
			<br />
		</div>
	</ContextMenu>
</div>

<style>
	.box,
	.double-box {
		width: 400px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		border: var(--wx-border);
	}
	.double-box {
		line-height: 70px;
		height: 200px;
	}
	.double-box > :global(div) {
		display: inline;
	}
</style>
