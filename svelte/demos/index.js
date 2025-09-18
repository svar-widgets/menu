import { mount } from "svelte";
import Demos from "./common/Index.svelte";
import { Willow, WillowDark } from "@svar-ui/svelte-core";

mount(Demos, {
	target: document.querySelector("#wx_demo_area") || document.body,
	props: {
		publicName: "Menu",
		productTag: "menu",
		skins: [
			{ id: "willow", label: "Willow", component: Willow },
			{ id: "willow-dark", label: "Dark", component: WillowDark },
		],
	},
});
