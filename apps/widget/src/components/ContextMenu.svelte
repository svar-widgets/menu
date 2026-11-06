<script lang="ts">
	import type { Snippet } from "svelte";
	import type { TPosition } from "@svar-ui/lib-dom";
	import ActionMenu from "./ActionMenu.svelte";
	import type {
		IMenuOption,
		IMenuOptionClick,
		TMenuFilter,
		TMenuResolver,
	} from "../types";

	type Props = {
		options?: IMenuOption[];
		at?: TPosition;
		resolver?: TMenuResolver | null;
		dataKey?: string;
		filter?: TMenuFilter | null;
		css?: string;
		children?: Snippet;
		onclick?: (ev: IMenuOptionClick) => void;
	};

	// svelte-ignore non_reactive_update
	let menu: ReturnType<typeof ActionMenu>;
	export function show(ev: MouseEvent | null, obj?: any) {
		menu.show(ev, obj);
	}

	let {
		options = [],
		at = "bottom",
		resolver = null,
		dataKey = "contextId",
		filter = null,
		css = "",
		children,
		onclick,
	}: Props = $props();
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
