import type { Component } from "svelte";
import { uid } from "@svar-ui/lib-dom";
import type { IMenuItemProps, IMenuOption } from "../types";

export function walkData(
	data: IMenuOption[],
	cb: (option: IMenuOption) => void
): void {
	data.forEach(a => {
		cb(a);
		if (a.data && a.data.length) walkData(a.data, cb);
	});
}

export function mapData(
	data: IMenuOption[],
	cb: (option: IMenuOption, index: number) => IMenuOption | null
): IMenuOption[] {
	return data
		.map((a, i) => {
			const out = cb(a, i);
			if (out && a.data && a.data.length) out.data = mapData(a.data, cb);
			return out;
		})
		.filter((a): a is IMenuOption => Boolean(a));
}

export function filterMenu(
	data: IMenuOption[],
	cb: (option: IMenuOption) => boolean
): IMenuOption[] {
	const out: IMenuOption[] = [];
	data.forEach(a => {
		if (a.data) {
			const sub = filterMenu(a.data, cb);
			if (sub.length) out.push({ ...a, data: sub });
		} else {
			if (cb(a)) out.push(a);
		}
	});

	return out;
}

export function prepareMenuData(data: IMenuOption[]): IMenuOption[] {
	return mapData(data, (a, i) => {
		// [deprecated] option.type to be deprecated in 3.0
		const opt = { ...a, id: a.id || uid() };
		if (opt.type) opt.comp = opt.type;
		if (opt.comp === "separator" && data[i - 1]?.comp === "separator")
			return null;
		return opt;
	});
}

const handlers: Record<string, Component<any>> = {};
export function getItemHandler(type: string | Component<any>): Component<any> {
	// unregistered string types are not renderable, same as before typing
	return ((typeof type === "string" && handlers[type]) ||
		type) as Component<any>;
}
export function registerMenuItem(
	type: string,
	handler: Component<IMenuItemProps>
): void {
	handlers[type] = handler;
}
