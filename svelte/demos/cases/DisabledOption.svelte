<script>
	import { ContextMenu, MenuBar } from "../../src/index";
	import { Button } from "@svar-ui/svelte-core";
	import { getMenuBarOptions, getOptions } from "../data";

	let disabled = $state(true);

	function disableEdit(options) {
		const option = options.find(
			o => o.id === "edit" || o.id === "edit-task"
		);
		option.disabled = true;
	}

	const barOptions = $derived.by(() => {
		const options = getMenuBarOptions().map(o => ({ ...o }));
		if (disabled) disableEdit(options);
		return options;
	});

	const options = $derived.by(() => {
		const options = getOptions().map(o => ({ ...o }));
		if (disabled) disableEdit(options);
		return options;
	});

	let message = $state("");
	function clicked(ev) {
		const option = ev.option;
		message = option ? `clicked on ${option.id}` : "closed";
	}

	function switchDisabled() {
		disabled = !disabled;
	}
</script>

<MenuBar options={barOptions} onclick={clicked}></MenuBar>
<div class="demo-status">{message}</div>

<div class="demo-box">
	<ContextMenu {options} onclick={clicked} at="point">
		<div class="double-box">Click me ( context menu )</div>
	</ContextMenu>
</div>

<div style="padding-left:20px;">
	<Button onclick={switchDisabled} type="primary"
		>{(disabled ? "Enable" : "Disable") + " edit option"}</Button
	>
</div>

<style>
	.double-box {
		width: 400px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: var(--wx-border);
	}
</style>
