<script>
	import { getItemHandler } from "../helpers";

	export let item;
	export let showSub = false;
	export let activeItem = null;

	function onHover() {
		showSub = item.data ? item.id : false;
		activeItem = this;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="wx-item {item.css || ''}"
	data-id={item.id}
	on:mouseenter={onHover}
	on:click
>
	{#if item.icon}<i class="wx-icon {item.icon}" />{/if}
	{#if item.type}
		<svelte:component this={getItemHandler(item.type)} {item} />
	{:else}<span class="wx-value"> {item.text} </span>{/if}
	{#if item.subtext}<span class="wx-subtext">{item.subtext}</span>{/if}
	{#if item.data}<i class="wx-sub-icon wxi-angle-right" />{/if}
</div>

<style>
	.wx-item {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		height: 36px;
		line-height: 36px;
		padding: 2px 12px;
		font-family: var(--wx-font-family);
		font-weight: var(--wx-font-weight);
		font-size: var(--wx-font-size);
		background-color: var(--wx-background);
		cursor: pointer;
	}

	.wx-item:hover {
		background: var(--wx-background-alt);
	}

	.wx-item:first-child {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}

	.wx-item:last-child {
		border-bottom-left-radius: inherit;
		border-bottom-right-radius: inherit;
	}

	.wx-value {
		flex-grow: 1;
		white-space: nowrap;
		color: var(--wx-color-font);
	}
	.wx-icon,
	.wx-sub-icon {
		vertical-align: middle;
		height: inherit;
		line-height: inherit;
		font-size: var(--wx-icon-size);
		color: var(--wx-icon-color);
	}

	.wx-icon {
		margin-right: 8px;
	}

	.wx-subtext {
		color: var(--wx-color-font-disabled);
		margin-left: 20px;
		white-space: nowrap;
	}
</style>
