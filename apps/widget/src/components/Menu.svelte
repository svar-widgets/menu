<script lang="ts">
	import Menu from "./Menu.svelte";

	import {
		clickOutside,
		calculatePosition,
		getPopupParents,
		type TPosition,
	} from "@svar-ui/lib-dom";
	import { onMount } from "svelte";

	import MenuOption from "./MenuOption.svelte";
	import { prepareMenuData } from "../helpers";
	import type {
		IMenuOption,
		IMenuOptionClick,
		TID,
		TMenuMount,
	} from "../types";

	type Props = {
		options?: IMenuOption[];
		left?: number;
		top?: number;
		at?: TPosition;
		parent?: HTMLElement | null;
		mount?: TMenuMount | null;
		context?: any;
		css?: string;
		onclick?: (ev: IMenuOptionClick) => void;
	};

	let {
		options = [],
		left = 0,
		top = 0,
		at = "bottom",
		parent = null,
		mount = null,
		context = null,
		css = "",
		onclick,
	}: Props = $props();

	let x = $state(-10000);
	let y = $state(-10000);
	let z = $state(20);
	let width = $state<string>();

	let self = $state<HTMLElement>();
	let showSub = $state<TID | false>(false);
	let activeOption = $state<HTMLElement | null>(null);

	function updatePosition() {
		if (!self) return;
		const result = calculatePosition(
			self,
			parent as HTMLElement,
			at,
			left,
			top
		);
		if (result) {
			x = result.x;
			y = result.y;
			width = result.width;
		}

		let nextZ = result?.z ?? 20;
		// stay above ancestor popups (anchor lives in original DOM, not the portal)
		const parents = parent ? getPopupParents(parent) : [];
		let popupZ = 0;
		for (const node of parents) {
			const zi = parseInt(getComputedStyle(node).zIndex, 10);
			if (zi > popupZ) popupZ = zi;
		}
		if (popupZ >= nextZ) nextZ = popupZ + 1;
		z = nextZ;
	}

	// unfortunately svelte doesn't guarantee that afterUpdate of child component
	// will be called after onMount in the parent one, so to be sure that Portal is already
	// moved menu to the correct parent we are registering single time handler
	// svelte-ignore state_referenced_locally
	if (mount) mount(updatePosition);
	onMount(updatePosition);

	$effect(() => {
		updatePosition();
	});

	const finalOptions = $derived(prepareMenuData(options));

	const subMenuAt: TPosition = "right-overlap";

	function onLeave() {
		showSub = false;
	}
	function cancel() {
		//[deprecated] action will be deprecated in 3.0
		onclick?.({ action: null, option: null });
	}
	function onshow(id: TID | false, el: HTMLElement | null) {
		showSub = id;
		activeOption = el;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	use:clickOutside={{
		callback: cancel,
		modal: true,
		parent: () => parent as HTMLElement,
	}}
	bind:this={self}
	data-wx-menu="true"
	class="wx-menu {css}"
	style="position:absolute;top:{y}px;left:{x}px;width:{width};z-index:{z}"
	onmouseleave={onLeave}
>
	{#each finalOptions as option (option.id)}
		{#if option.comp === "separator"}
			<div class="wx-separator"></div>
		{:else}
			<MenuOption
				{option}
				{onshow}
				onclick={ev => {
					if (!option.data && !ev.defaultPrevented) {
						//[deprecated] action will be deprecated in 3.0
						const pack = {
							context,
							action: option,
							option,
							event: ev,
						};
						if (option.handler) option.handler(pack);
						onclick?.(pack);

						// it is a rare case when we need to stop event bubbling
						// clicking on menu is isolated action which must not affect any other elements on the page
						ev.stopPropagation();
					}
				}}
			/>
		{/if}
		{#if option.data && showSub === option.id}
			<Menu
				{css}
				options={option.data}
				at={subMenuAt}
				parent={activeOption}
				{context}
				{onclick}
			/>
		{/if}
	{/each}
</div>

<style>
	.wx-menu {
		position: absolute;
		box-shadow: var(--wx-shadow-light);

		min-width: 125px;
		display: flex;
		flex-direction: column;
		z-index: 20;
		border-radius: var(--wx-border-radius);
		background-color: var(--wx-background);
		padding: 4px 0;
	}

	.wx-separator {
		width: 100%;
		border-top: var(--wx-border-medium);
	}
</style>
