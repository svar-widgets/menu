<script>
	import { MenuBar } from "../../src/index";
	import { getMenuBarOptions } from "../data";

	const options = getMenuBarOptions();

	let message = $state("");
	function clicked(ev) {
		const option = ev.option;
		message = option ? `clicked on ${option.id}` : "closed";
	}
</script>

<MenuBar {options} onclick={clicked}></MenuBar>
<div class="demo-status">{message}</div>
