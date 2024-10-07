export function walkData(data, cb) {
	data.forEach(a => {
		cb(a);
		if (a.data && a.data.length) walkData(a.data, cb);
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
	walkData(data, a => {
		a.id = a.id || uid++;
	});

	return data;
}

const handlers = {};
export function getItemHandler(type) {
	return handlers[type];
}
export function registerMenuItem(type, handler) {
	handlers[type] = handler;
}
