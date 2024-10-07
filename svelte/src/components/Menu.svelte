<script>
	import { clickOutside, calculatePosition } from "wx-lib-dom";
	import { onMount, createEventDispatcher } from "svelte";

	import MenuItem from "./MenuItem.svelte";
	import { prepareMenuData } from "../helpers";

	const dispatch = createEventDispatcher();

	export let options;
	$: prepareMenuData(options);

	export let left = 0;
	export let top = 0;
	export let at = "bottom";
	export let parent = null;
	export let mount = null;
	export let context = null;
	export let css = "";

	let x = -10000;
	let y = -10000;
	let index = 0;
	let width;

	let self;
	let showSub;
	let activeItem;

	function updatePosition() {
		const result = calculatePosition(self, parent, at, left, top);
		x = result.x || x;
		y = result.y || y;
		index = result.index;
		width = result?.width || width;
	}

	// unfortunately svelte doesn't guarantee that afterUpdate of child component
	// will be called after onMount in the parent one, so to be sure that Portal is already
	// moved menu to the correct parent we are registering single time handler
	if (mount) mount(updatePosition);
	onMount(updatePosition);
	$: updatePosition(parent);

	function onLeave() {
		showSub = false;
	}
	function cancel() {
		dispatch("click", { action: null });
	}
</script>

<div
	use:clickOutside={{ callback: cancel, modal: true }}
	bind:this={self}
	data-wx-menu="true"
	class="wx-menu {css}"
	style="top:{y}px;left:{x}px;width:{width};"
	on:mouseleave={onLeave}
>
	{#each options as item (item.id)}
		{#if item.type === "separator"}
			<div class="wx-separator" />
		{:else}
			<MenuItem
				{item}
				bind:showSub
				bind:activeItem
				on:click={ev => {
					if (!item.data && !ev.defaultPrevented) {
						const pack = { context, action: item, event: ev };
						if (item.handler) item.handler(pack);
						dispatch("click", pack);

						// it is a rare case when we need to stop event bubbling
						// clicking on menu is isolated action which must not affect any other elements on the page
						ev.stopPropagation();
					}
				}}
			/>
		{/if}
		{#if item.data && showSub === item.id}
			<svelte:self
				{css}
				options={item.data}
				at="right-overlap"
				parent={activeItem}
				{context}
				on:click
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
