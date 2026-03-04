context("Menu actions", () => {
	it("basis menu with submenus is visible and clickable", () => {
		cy.visit(`/index.html#/base/willow`);
		cy.get(".wx-button").eq(0).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("basic-menu-bottom");

		//click option with submenu - no action
		cy.wxM("menu-option", "add-task").click();
		cy.get(".wx-button").eq(0).click();
		cy.get(".demo-status").eq(0).should("include.text", "closed");

		cy.get(".wx-button").eq(1).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("basic-menu-right");
		cy.wxM("menu-option", "add-task").should("be.visible").hover();
		cy.get(".wx-menu .wx-menu").should("be.visible");
		cy.shot("menubar-submenu-visible");
		//click submenu option
		cy.wxM("menu-option", "add-task:child").click();
		cy.get(".demo-status")
			.eq(0)
			.should("include.text", "clicked on add-task:child");

		cy.get(".box").click();
		//click normal menu option
		cy.get(".wx-menu").should("be.visible");
		cy.shot("basic-menu-cursor");
		cy.wxM("menu-option", "edit-task").click();
		cy.get(".demo-status")
			.eq(0)
			.should("include.text", "clicked on edit-task");
	});
	it("menubar options are visible and clickable", () => {
		cy.visit(`/index.html#/bar/willow`);
		cy.get(".wx-menubar  .wx-option").eq(0).click();
		cy.get(".wx-menu").should("be.visible");
		cy.get("body").click();
		cy.get(".wx-menubar  .wx-option").eq(0).click();
		cy.get(".wx-menu").should("be.visible");
		cy.get(".wx-menubar  .wx-option").eq(1).hover();
		cy.shot("menubar-menu-visible-after-click-and-hover");
	});
	it("context menu is visible and clickable", () => {
		cy.visit(`/index.html#/context/willow`);
		cy.get(".double-box").rightclick(10, 10);
		cy.get(".wx-menu").should("be.visible");
		cy.shot("contentmenu-visible-outer-box");
		cy.get(".double-box").click();
		cy.get(".double-box span").eq(1).rightclick();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("contentmenu-visible-inner-box");
	});
	it("context menu with item resolver", () => {
		cy.visit(`/index.html#/context-data/willow`);
		cy.get(".item").eq(1).rightclick();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("contextmenu-item-visible-1");
		cy.get(".wx-menu .wx-option").eq(2).click();
		cy.get(".demo-status")
			.eq(0)
			.should("include.text", "cut-task for project 1");

		cy.get(".item").eq(2).rightclick();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("contextmenu-item-visible-2");
		cy.get(".wx-menu .wx-option").eq(1).click();
		cy.get(".demo-status")
			.eq(0)
			.should("include.text", "edit-task for task 2");
	});
	it("action menu is visible and clickable", () => {
		cy.visit(`/index.html#/action/willow`);
		cy.get(".wx-button").eq(0).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("action-menu-visible");
		cy.get("body").click();
		cy.get(".wx-menu").should("not.exist");

		cy.get(".wx-button").eq(1).click();
		cy.get(".wx-menu").should("be.visible");
		cy.get(".wx-menu .wx-option").eq(2).click();
		cy.get(".wx-button").eq(1).should("include.text", "Project C");
		cy.shot("action-menu-clickable");
		cy.get(".wx-button").eq(1).click();
	});
	it("action menu activation areas", () => {
		cy.visit(`/index.html#/custom-area/willow`);
		cy.get(".wx-icon").eq(0).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("action-menu-show-by-api");
		cy.get(".wx-icon").eq(0).click();
		cy.get(".menu").eq(0).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("action-menu-show-by-context-id");
		cy.get(".menu").eq(0).click();
		cy.get(".content").scrollTo("bottom");
		cy.get(".demo-box").eq(2).find(".item").eq(0).click();
		cy.shot("action-menu-outer-box");
		cy.get(".demo-box").eq(2).find(".item").eq(0).click();
		cy.get(".demo-box").eq(2).find(".item").eq(0).find(".menu").click();
		cy.shot("action-menu-inner-box");
	});
	it("custom components as options", () => {
		cy.visit(`/index.html#/custom/willow`);
		cy.get(".wx-button").eq(1).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("dropdown-menu-custom-options");
		cy.get(".wx-option").eq(2).should("be.visible").hover();
		cy.get(".wx-menu .wx-menu .wx-option").eq(0).click();
		cy.get(".wx-menu").should("not.exist");
	});

	it("dropdown menu is visible and adjusts width", () => {
		cy.visit(`/index.html#/dropdown/willow`);
		cy.get(".wx-button").eq(1).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("dropdown-menu-matches-parent-width");
	});
	it("dropdown menu with relative positions", () => {
		cy.visit(`/index.html#/positions/willow`);
		cy.get(".wx-segmented button").each($btn => {
			cy.wrap($btn).click();
			const title = $btn.attr("title");
			cy.get(".wx-button").click({ force: true });
			cy.get(".wx-menu").should("be.visible");
			cy.shot("dropdown-positions-" + title, {
				area: ".content",
			});
			cy.wrap($btn).click({ force: true });
		});
	});
	it("relative scroll with dropdown menu", () => {
		cy.visit(`/index.html#/relative/willow`);
		cy.get(".wx-button").eq(0).click();
		cy.get(".wrapper").scrollTo(0, 0);
		cy.get(".wx-menu").should("be.visible");
		// Scroll the content so that the button (and menu) move out of view
		cy.get(".wrapper").scrollTo(0, 130);
		cy.shot("dropdown-menu-scrolled-up");
		cy.get(".wrapper").scrollTo(0, 0);
		cy.get(".wx-button").eq(0).click();
		cy.get(".wx-button").eq(1).click();
		cy.get(".wx-menu").should("be.visible");
		cy.get(".wrapper").scrollTo(0, 130);
		cy.shot("dropdown-menu-fixed-on-scroll");
	});
	it("styling sample", () => {
		cy.visit(`/index.html#/styling/willow`);
		cy.get(".wx-menubar .wx-option").eq(0).click();
		cy.shot("menubar-submenu-styles");
	});
	it("menus-in-popups-windows", () => {
		cy.visit(`/index.html#/areas/willow`);
		cy.get(".wx-button").eq(0).click();
		cy.get(".wx-modal .wx-window").should("be.visible");
		cy.get(".wx-modal .wx-window .wx-button").eq(1).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("actionmenu-inside-modal");
		cy.get(".wx-modal .wx-window .wx-button").eq(0).click();
		cy.get(".wx-button").eq(1).click();
		cy.get(".wx-popup").should("be.visible");
		cy.get(".wx-popup .wx-button").eq(0).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("actionmenu-inside popup");
		cy.get(".wx-button").eq(1).click();
		cy.get(".wx-button").eq(2).click();
		cy.get(".wx-sidearea").should("be.visible");
		cy.get(".wx-sidearea .wx-button").eq(1).click();
		cy.get(".wx-menu").should("be.visible");
		cy.shot("actionmenu-inside-sidebar");
		cy.get(".wx-button").eq(1).click();
	});
	// it("disabled options", () => {
	// 	cy.visit(`/index.html#/disabled/willow`);
	// 	cy.get(".double-box").rightclick();
	// 	cy.get(".wx-menu .wx-option").eq(1).should("have.class", "wx-disabled");
	// 	cy.get(".wx-menu .wx-option")
	// 		.eq(1)
	// 		.should("have.css", "pointer-events", "none");
	// 	cy.get(".wx-menubar .wx-option")
	// 		.eq(1)
	// 		.should("have.class", "wx-disabled");
	// 	cy.get(".wx-menubar .wx-option")
	// 		.eq(1)
	// 		.should("have.css", "pointer-events", "none");
	// 	cy.shot("disabled-options");
	// });
});
