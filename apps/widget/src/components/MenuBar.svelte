<script lang="ts">
	import ActionMenu from "./ActionMenu.svelte";
	import { prepareMenuData } from "../helpers";
	import type { IMenuOption, IMenuOptionClick, TID } from "../types";

	type Props = {
		css?: string;
		menuCss?: string;
		options?: IMenuOption[];
		onclick?: (ev: IMenuOptionClick) => void;
	};

	let menu: ReturnType<typeof ActionMenu>;
	let { css = "", menuCss = "", options = [], onclick }: Props = $props();

	const finalOptions = $derived(prepareMenuData(options));

	// false - no menu, id - opened submenu, -1 - hover mode without submenu
	let active = $state<TID | null | false>(false);
	let menuOptions = $state<IMenuOption[]>([]);

	function doClick(ev: IMenuOptionClick) {
		active = null;
		onclick?.(ev);
	}

	function setMenu(ev: MouseEvent, option: IMenuOption, trigger?: boolean) {
		// if the option has a submenu, show it and enable hover mode
		if (option.data && option.data.length) {
			if (active && trigger) {
				// second click on option with submenu disables hover mode
				active = null;
			} else {
				menuOptions = option.data;
				active = option.id as TID;
				menu.show(ev, option);
			}
		} else {
			// hide the submenu
			menu.show(null);
			// if it was the click action, dispatch it and end hover mode
			if (trigger) {
				//[deprecated] action will be deprecated in 3.0
				onclick?.({ action: option, option });
				active = null;
			} else {
				// do not remove active flag, to preserve the hover mode
				active = -1;
			}
		}
	}

	function onHover(ev: MouseEvent, option: IMenuOption) {
		if (active) setMenu(ev, option);
	}
</script>

<div class="wx-menubar {css}">
	{#each finalOptions as option (option.id)}
		<button
			class="wx-option {active === option.id ? 'wx-active' : ''}"
			class:wx-disabled={option.disabled}
			onmouseenter={ev => onHover(ev, option)}
			onclick={ev => setMenu(ev, option, true)}>{option.text}</button
		>
	{/each}
</div>

<ActionMenu
	css={menuCss}
	onclick={doClick}
	options={menuOptions}
	bind:this={menu}
/>

<style>
	.wx-menubar {
		display: flex;
		position: relative;
		width: fit-content;
	}

	.wx-option {
		background-color: transparent;
		border: none;
		color: var(--wx-color-font);
		box-sizing: border-box;
		height: 36px;
		line-height: 30px;
		padding: 2px 12px;
		font-family: var(--wx-font-family);
		font-weight: var(--wx-font-weight);
		font-size: var(--wx-font-size);

		cursor: pointer;
		outline: none;
		white-space: nowrap;
	}

	.wx-active,
	.wx-option:hover {
		background-color: var(--wx-background-alt);
		border-radius: var(--wx-button-border-radius);
	}
	.wx-disabled {
		pointer-events: none;
	}
	.wx-disabled {
		color: var(--wx-color-font-disabled);
	}
</style>
