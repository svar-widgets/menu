<script lang="ts">
	import type { Snippet } from "svelte";
	import type { TPosition } from "@svar-ui/lib-dom";
	import { Portal } from "@svar-ui/svelte-core";
	import Menu from "./Menu.svelte";
	import type { IMenuOption, IMenuOptionClick, TMenuMount } from "../types";

	type Props = {
		options?: IMenuOption[];
		at?: TPosition;
		css?: string;
		children?: Snippet;
		onclick?: (ev: IMenuOptionClick) => void;
	};

	let {
		options = [],
		at = "bottom",
		css = "",
		children,
		onclick,
	}: Props = $props();

	export function show(ev: MouseEvent) {
		parent = ev.target as HTMLElement;
		ev.preventDefault();
	}

	let parent = $state<HTMLElement | null>(null);

	function onClick(ev: IMenuOptionClick) {
		parent = null;
		onclick?.(ev);
	}
	function showAt(ev: MouseEvent) {
		let target = ev.target as HTMLElement;
		while (!target.dataset.menuIgnore) {
			parent = target;
			target = target.parentNode as HTMLElement;
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span onclick={showAt} data-menu-ignore="true">
	{@render children?.()}
</span>
{#if parent}
	<Portal>
		{#snippet children({ mount }: { mount: TMenuMount })}
			{#key parent}
				<Menu {css} {at} {mount} {parent} {options} onclick={onClick} />
			{/key}
		{/snippet}
	</Portal>
{/if}
