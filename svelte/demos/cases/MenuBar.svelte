<script>
	import { MenuBar } from "../../src/index";
	import { getMenuBarOptions } from "../data";

	const options = getMenuBarOptions();

	let message = "";
	function clicked(ev) {
		const action = ev.detail.action;
		message = action ? `clicked on ${action.id}` : "closed";
	}
</script>

<MenuBar {options} on:click={clicked}></MenuBar>
<div class="demo-status">{message}</div>
