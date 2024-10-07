<script>
	import { createEventDispatcher } from "svelte";

	import ActionMenu from "./ActionMenu.svelte";
	import { prepareMenuData } from "../helpers";

	const dispatch = createEventDispatcher();

	export let css = "";
	export let menuCss = "";
	export let options;
	$: prepareMenuData(options);

	let active;
	let menuOptions = [];
	let activate = null;

	function doClick(ev) {
		active = null;
		dispatch("click", ev.detail);
	}

	function setMenu(ev, item, trigger) {
		// if the item has a submenu, show it and enable hover mode
		if (item.data && item.data.length) {
			if (active && trigger) {
				// second click on item with submenu disables hover mode
				active = null;
			} else {
				menuOptions = item.data;
				active = item.id;
				activate(ev, item);
			}
		} else {
			// hide the submenu
			activate(null);
			// if it was the click action, dispatch it and end hover mode
			if (trigger) {
				dispatch("click", { action: item });
				active = null;
			} else {
				// do not remove active flag, to preserve the hover mode
				active = -1;
			}
		}
	}

	function onHover(ev, item) {
		if (active) setMenu(ev, item);
	}
</script>

<div class="wx-menubar {css}">
	{#each options as item (item.id)}
		<button
			class="wx-item {active === item.id ? 'wx-active' : ''}"
			on:mouseenter={ev => onHover(ev, item)}
			on:click={ev => setMenu(ev, item, true)}>{item.text}</button
		>
	{/each}
</div>

<ActionMenu
	css={menuCss}
	on:click={doClick}
	options={menuOptions}
	bind:handler={activate}
/>

<style>
	.wx-menubar {
		display: flex;
		position: relative;
		width: fit-content;
	}

	.wx-item {
		background-color: transparent;
		border: none;
		color: var(--wx-color-font);
		box-sizing: border-box;
		height: 36px;
		line-height: 30px;
		padding: 2px 12px;
		font-family: var(--wx-font-family);
		font-weight: var(--wx-font-weight);
		font-size: var(--wx-font-size);

		cursor: pointer;
		outline: none;
		white-space: nowrap;
	}

	.wx-active,
	.wx-item:hover {
		background-color: var(--wx-background-alt);
		border-radius: var(--wx-button-border-radius);
	}
</style>
