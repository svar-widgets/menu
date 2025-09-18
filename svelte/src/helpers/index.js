export function walkData(data, cb) {
	data.forEach(a => {
		cb(a);
		if (a.data && a.data.length) walkData(a.data, cb);
	});
}

export function mapData(data, cb) {
	return data.map(a => {
		const out = cb(a);
		if (a.data && a.data.length) out.data = mapData(a.data, cb);
		return out;
	});
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

let uid = 1;
export function prepareMenuData(data) {
	return mapData(data, a => {
		// [deprecated] option.type to be deprecated in 3.0
		if (a.type) a.comp = a.type;
		return { ...a, id: a.id || uid++ };
	});
}

const handlers = {};
export function getItemHandler(type) {
	return handlers[type] || type;
}
export function registerMenuItem(type, handler) {
	handlers[type] = handler;
}
