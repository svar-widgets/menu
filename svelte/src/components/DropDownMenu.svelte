<script>
	import { Portal } from "wx-svelte-core";
	import Menu from "./Menu.svelte";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	export let options;
	export let at = "bottom";
	export let css = "";

	export const handler = ev => {
		parent = ev.target;
		ev.preventDefault();
	};

	var parent = null;
	function onClick(ev) {
		parent = null;
		dispatch("click", ev.detail);
	}
	function show(ev) {
		let target = ev.target;
		while (!target.dataset.menuIgnore) {
			parent = target;
			target = target.parentNode;
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={show} data-menu-ignore="true">
	<slot />
</div>
{#if parent}
	<Portal let:mount>
		{#key parent}
			<Menu {css} {at} {mount} {parent} {options} on:click={onClick} />
		{/key}
	</Portal>
{/if}
