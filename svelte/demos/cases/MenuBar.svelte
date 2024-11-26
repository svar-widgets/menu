<script>
	import { MenuBar } from "../../src/index";
	import { getMenuBarOptions } from "../data";

	const options = getMenuBarOptions();

	let message = $state("");
	function clicked(ev) {
		const action = ev.action;
		message = action ? `clicked on ${action.id}` : "closed";
	}
</script>

<MenuBar {options} onclick={clicked}></MenuBar>
<div class="demo-status">{message}</div>
