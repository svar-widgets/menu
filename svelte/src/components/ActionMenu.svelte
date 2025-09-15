<script>
	import { Portal } from "@svar-ui/svelte-core";
	import { id } from "@svar-ui/lib-dom";
	import Menu from "./Menu.svelte";
	import { filterMenu } from "../helpers";

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

	var filteredOptions = $derived.by(() => {
		if (item !== null && filter) {
			return filterMenu(options, v => filter(v, item));
		}
		return options;
	});

	var item = $state(null);
	var parent = $state(null);
	let left = $state(0),
		top = $state(0);

	function onClick(ev) {
		parent = null;
		onclick && onclick(ev);
	}
	function getDataAttr(node, name) {
		let v = null;
		while (node && node.dataset && !v) {
			v = node.dataset[name];
			node = node.parentNode;
		}
		return v ? id(v) : null;
	}

	export function show(ev, obj) {
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

		parent = target;

		ev.preventDefault();
	}

	// about #key in markup below
	// we need to be sure that menu is closed before it is shown again
	// its the only way to reinit click-outside
	// otherwise, the menu will be hidden as click-ouside occurs after show call
</script>

{#if children}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<span onclick={show} data-menu-ignore="true">
		{@render children?.()}
	</span>
{/if}

{#if parent}
	<Portal>
		{#snippet children({ mount })}
			{#key parent}
				<Menu
					{css}
					{at}
					{top}
					{left}
					{mount}
					{parent}
					context={item}
					onclick={onClick}
					options={filteredOptions}
				/>
			{/key}
		{/snippet}
	</Portal>
{/if}
