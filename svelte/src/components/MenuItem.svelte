<script>
	import { getItemHandler } from "../helpers";

	let {
		item,
		showSub = $bindable(false),
		activeItem = $bindable(null),
		onclick,
	} = $props();

	function onHover() {
		showSub = item.data ? item.id : false;
		activeItem = this;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="wx-item {item.css || ''}"
	data-id={item.id}
	onmouseenter={onHover}
	{onclick}
>
	{#if item.icon}<i class="wx-icon {item.icon}"></i>{/if}
	{#if item.type}
		{@const SvelteComponent = getItemHandler(item.type)}
		<SvelteComponent {item} />
	{:else}<span class="wx-value"> {item.text} </span>{/if}
	{#if item.subtext}<span class="wx-subtext">{item.subtext}</span>{/if}
	{#if item.data}<i class="wx-sub-icon wxi-angle-right"></i>{/if}
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
