<script lang="ts">
	import { MenuBar } from "@svar-ui/svelte-menu";
	import type { IMenuOptionClick } from "@svar-ui/svelte-menu";
	import { getMenuBarOptions } from "../data";

	const options = getMenuBarOptions();

	let message = $state("");
	function clicked(ev: IMenuOptionClick) {
		const option = ev.option;
		message = option ? `clicked on ${option.id}` : "closed";
	}
</script>

<MenuBar {options} onclick={clicked}></MenuBar>
<div class="demo-status">{message}</div>
