const cases = [
	"/action/:skin",
	"/bar/:skin",
	"/base/:skin",
	"/button/:skin",
	"/context-data/:skin",
	"/context/:skin",
	"/custom-area/:skin",
	"/custom/:skin",
	"/dropdown/:skin",
	"/positions/:skin",
	"/relative/:skin",
];

const skins = ["material", "willow", "willow-dark"];
const links = [];

cases.forEach(w => {
	skins.forEach(s => {
		links.push(w.replace(":skin", s));
	});
});

context("Basic functionality", () => {
	it("widget", () => {
		links.forEach(w => {
			cy.visit(`/index.html#${w}`);
			cy.shot(w, { area: ".content" });
		});
	});
});
