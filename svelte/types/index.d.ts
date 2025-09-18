import type { Component } from "svelte";

export interface IMenuOption {
	id?: string | number;
	text?: string;
	subtext?: string;
	handler?: (ev: IMenuOptionClick) => void;
	data?: IMenuOption[];
	css?: string;
	icon?: string;
	type?: string | Component<any>; // @deprecated use `comp` instead. Will be removed in v3.0
	comp?: string | Component<any>;
}

export interface IMenuOptionClick {
	context?: any;
	action: IMenuOption; // @deprecated use `option` instead. Will be removed in v3.0
	option: IMenuOption;
	event?: MouseEvent;
}

export declare const Menu: Component<{
	options?: IMenuOption[];
	left?: number;
	top?: number;
	at?: string;
	parent?: HTMLElement;
	mount?: (callback: () => void) => void;
	context?: any;
	css?: string;
	onclick?: (ev: IMenuOptionClick) => void;
}>;

export declare const MenuBar: Component<{
	css?: string;
	menuCss?: string;
	options?: IMenuOption[];
	onclick?: (ev: IMenuOptionClick) => void;
}>;

export declare const DropDownMenu: Component<{
	options?: IMenuOption[];
	at?: string;
	css?: string;
	children?: () => any;
	onclick?: (ev: IMenuOptionClick) => void;
}>;

export declare const ContextMenu: Component<{
	options?: IMenuOption[];
	at?: string;
	resolver?: (item: any, event: MouseEvent) => any;
	dataKey?: string;
	filter?: (option: IMenuOption, item: any) => boolean;
	css?: string;
	children?: () => any;
	onclick?: (ev: IMenuOptionClick) => void;
}>;

export declare const ActionMenu: Component<{
	options?: IMenuOption[];
	at?: string;
	resolver?: (item: any, event: MouseEvent) => any;
	dataKey?: string;
	filter?: (option: IMenuOption, item: any) => boolean;
	css?: string;
	children?: () => any;
	onclick?: (ev: IMenuOptionClick) => void;
}>;

export declare function registerMenuItem(
	type: string,
	handler: Component<{ option?: any }>
): void;
