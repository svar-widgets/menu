<script>
	import { Portal } from "wx-svelte-core";
	import { id } from "wx-lib-dom";
	import Menu from "./Menu.svelte";
	import { filterMenu } from "../helpers";

	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	const SLOTS = $$props.$$slots;

	export let options;
	export let at = "bottom";
	export let resolver = null;
	export let dataKey = "contextId";
	export let filter = null;
	export let css = "";
	export const handler = show;

	var filteredOptions;
	$: filteredOptions = options;

	var item = null;
	var parent = null;
	let left = 0,
		top = 0;

	function onClick(ev) {
		parent = null;
		dispatch("click", ev.detail);
	}
	function getDataAttr(node, name) {
		let v = null;
		while (node && node.dataset && !v) {
			v = node.dataset[name];
			node = node.parentNode;
		}
		return v ? id(v) : null;
	}
	function show(ev, obj) {
		if (!ev) {
			parent = null;
			return;
		}

		if (ev.defaultPrevented) return;

		const target = ev.target;
		if (target && target.dataset && target.dataset.menuIgnore) return;

		left = ev.clientX + 1;
		top = ev.clientY + 1;

		item = typeof obj !== "undefined" ? obj : getDataAttr(target, dataKey);
		if (resolver) {
			item = resolver(item, ev);
			if (!item) return;
		}

		if (item !== null && filter) {
			filteredOptions = filterMenu(options, v => filter(v, item));
		}
		parent = target;

		ev.preventDefault();
	}

	// about #key in markup below
	// we need to be sure that menu is closed before it is shown again
	// its the only way to reinit click-outside
	// otherwise, the menu will be hidden as click-ouside occurs after show call
</script>

{#if SLOTS && SLOTS.default}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={handler} data-menu-ignore="true">
		<slot />
	</div>
{/if}

{#if parent}
	<Portal let:mount>
		{#key parent}
			<Menu
				{css}
				{at}
				{top}
				{left}
				{mount}
				{parent}
				context={item}
				on:click={onClick}
				options={filteredOptions}
			/>
		{/key}
	</Portal>
{/if}
