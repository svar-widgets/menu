<script>
	import Menu from "./Menu.svelte";
	import { run } from "svelte/legacy";

	import { clickOutside, calculatePosition } from "wx-lib-dom";
	import { onMount } from "svelte";

	import MenuItem from "./MenuItem.svelte";
	import { prepareMenuData } from "../helpers";

	let {
		options,
		left = 0,
		top = 0,
		at = "bottom",
		parent = null,
		mount = null,
		context = null,
		css = "",
		onclick,
	} = $props();

	let x = $state(-10000);
	let y = $state(-10000);
	let z = $state(20);
	let width = $state();

	let self = $state();
	let showSub = $state(false);
	let activeItem = $state(null);

	function updatePosition() {
		const result = calculatePosition(self, parent, at, left, top);
		x = result.x || x;
		y = result.y || y;
		z = result.z || z;
		width = result.width || width;
	}

	// unfortunately svelte doesn't guarantee that afterUpdate of child component
	// will be called after onMount in the parent one, so to be sure that Portal is already
	// moved menu to the correct parent we are registering single time handler
	if (mount) mount(updatePosition);
	onMount(updatePosition);

	function onLeave() {
		showSub = false;
	}
	function cancel() {
		onclick && onclick({ action: null });
	}
	run(() => {
		prepareMenuData(options);
	});
	run(() => {
		updatePosition(parent);
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	use:clickOutside={{ callback: cancel, modal: true }}
	bind:this={self}
	data-wx-menu="true"
	class="wx-menu {css}"
	style="top:{y}px;left:{x}px;width:{width};z-index:{z}"
	onmouseleave={onLeave}
>
	{#each options as item (item.id)}
		{#if item.type === "separator"}
			<div class="wx-separator"></div>
		{:else}
			<MenuItem
				{item}
				bind:showSub
				bind:activeItem
				onclick={ev => {
					if (!item.data && !ev.defaultPrevented) {
						const pack = { context, action: item, event: ev };
						if (item.handler) item.handler(pack);
						onclick && onclick(pack);

						// it is a rare case when we need to stop event bubbling
						// clicking on menu is isolated action which must not affect any other elements on the page
						ev.stopPropagation();
					}
				}}
			/>
		{/if}
		{#if item.data && showSub === item.id}
			<Menu
				{css}
				options={item.data}
				at="right-overlap"
				parent={activeItem}
				{context}
				{onclick}
			/>
		{/if}
	{/each}
</div>

<style>
	.wx-menu {
		position: absolute;
		box-shadow: var(--wx-shadow-light);

		min-width: 125px;
		display: flex;
		flex-direction: column;
		z-index: 20;
		border-radius: var(--wx-border-radius);
		background-color: var(--wx-background);
		padding: 4px 0;
	}

	.wx-separator {
		width: 100%;
		border-top: var(--wx-border-medium);
	}
</style>
