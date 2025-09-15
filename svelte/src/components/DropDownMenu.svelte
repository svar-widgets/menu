<script>
	import { Portal } from "@svar-ui/svelte-core";
	import Menu from "./Menu.svelte";

	let { options, at = "bottom", css = "", children, onclick } = $props();

	export const handler = ev => {
		parent = ev.target;
		ev.preventDefault();
	};

	var parent = $state(null);
	function onClick(ev) {
		parent = null;
		onclick && onclick(ev);
	}
	function show(ev) {
		let target = ev.target;
		while (!target.dataset.menuIgnore) {
			parent = target;
			target = target.parentNode;
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span onclick={show} data-menu-ignore="true">
	{@render children?.()}
</span>
{#if parent}
	<Portal>
		{#snippet children({ mount })}
			{#key parent}
				<Menu {css} {at} {mount} {parent} {options} onclick={onClick} />
			{/key}
		{/snippet}
	</Portal>
{/if}
