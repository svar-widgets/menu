<script>
	import ActionMenu from "./ActionMenu.svelte";

	// svelte-ignore non_reactive_update
	let menu = null;
	export function show(ev, obj) {
		menu.show(ev, obj);
	}

	let {
		options,
		at = "bottom",
		resolver = null,
		dataKey = "contextId",
		filter = null,
		css = "",
		children,
		onclick,
	} = $props();
</script>

{#if children}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<span oncontextmenu={show} data-menu-ignore="true">
		{@render children?.()}
	</span>
{/if}

<ActionMenu
	{css}
	{at}
	{options}
	{resolver}
	{dataKey}
	{filter}
	bind:this={menu}
	{onclick}
/>
