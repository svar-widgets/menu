<script>
	import ActionMenu from "./ActionMenu.svelte";

	const SLOTS = $$props.$$slots;

	export let handler = null;

	export let options;
	export let at = "bottom";
	export let resolver = null;
	export let dataKey = "contextId";
	export let filter = null;
	export let css = "";
</script>

{#if SLOTS && SLOTS.default}
	<div on:contextmenu={handler} data-menu-ignore="true">
		<slot />
	</div>
{/if}

<ActionMenu
	{css}
	{at}
	{options}
	{resolver}
	{dataKey}
	{filter}
	bind:handler
	on:click
/>
