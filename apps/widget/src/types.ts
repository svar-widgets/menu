import type { Component } from "svelte";

export type TID = string | number;

/**
 * Menu option. Custom fields (e.g. for custom option components) can be
 * declared by merging into this interface:
 *
 *     declare module "@svar-ui/svelte-menu" {
 *         interface IMenuOption { name?: string }
 *     }
 */
export interface IMenuOption {
	id?: TID;
	text?: string;
	subtext?: string;
	handler?: (ev: IMenuOptionClick) => void;
	data?: IMenuOption[];
	css?: string;
	icon?: string;
	disabled?: boolean;
	/** @deprecated use `comp` instead. Will be removed in v3.0 */
	type?: string | Component<any>;
	comp?: string | Component<any>;
}

export interface IMenuOptionClick {
	context?: any;
	/** @deprecated use `option` instead. Will be removed in v3.0 */
	action: IMenuOption | null;
	option: IMenuOption | null;
	event?: MouseEvent;
}

// props passed to a custom option component registered by registerMenuItem
export interface IMenuItemProps {
	option: IMenuOption;
	/** @deprecated use `option` instead. Will be removed in v3.0 */
	item: IMenuOption;
}

export type TMenuResolver = (item: any, event: MouseEvent) => any;
export type TMenuFilter = (option: IMenuOption, item: any) => boolean;
export type TMenuMount = (callback: () => void) => void;
