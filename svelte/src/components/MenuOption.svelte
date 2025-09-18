<script>
	import { getItemHandler } from "../helpers";

	let { option, onclick, onshow } = $props();

	let element;
	function onHover() {
		onshow(option.data ? option.id : false, element);
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	bind:this={element}
	class="wx-option {option.css || ''}"
	data-id={option.id}
	onmouseenter={onHover}
	{onclick}
>
	{#if option.icon}<i class="wx-icon {option.icon}"></i>{/if}
	{#if option.comp}
		{@const SvelteComponent = getItemHandler(option.comp)}
		<!-- [deprecated] item property will be deprecated in 3.0-->
		<SvelteComponent item={option} {option} />
	{:else}<span class="wx-value"> {option.text} </span>{/if}
	{#if option.subtext}<span class="wx-subtext">{option.subtext}</span>{/if}
	{#if option.data}<i class="wx-sub-icon wxi-angle-right"></i>{/if}
</div>

<style>
	.wx-option {
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

	.wx-option:hover {
		background: var(--wx-background-alt);
	}

	.wx-option:first-child {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}

	.wx-option:last-child {
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
