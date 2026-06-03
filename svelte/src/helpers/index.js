import { uid } from "@svar-ui/lib-dom";

export function walkData(data, cb) {
	data.forEach(a => {
		cb(a);
		if (a.data && a.data.length) walkData(a.data, cb);
	});
}

export function mapData(data, cb) {
	return data
		.map((a, i) => {
			const out = cb(a, i);
			if (a.data && a.data.length) out.data = mapData(a.data, cb);
			return out;
		})
		.filter(Boolean);
}

export function filterMenu(data, cb) {
	const out = [];
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

export function prepareMenuData(data) {
	return mapData(data, (a, i) => {
		// [deprecated] option.type to be deprecated in 3.0
		const opt = { ...a, id: a.id || uid() };
		if (opt.type) opt.comp = opt.type;
		if (opt.comp === "separator" && data[i - 1]?.comp === "separator")
			return null;
		return opt;
	});
}

const handlers = {};
export function getItemHandler(type) {
	return handlers[type] || type;
}
export function registerMenuItem(type, handler) {
	handlers[type] = handler;
}
