<script>
	import { Button } from "@svar-ui/svelte-core";
	import { Menu } from "../../src/index";

	import { getOptions } from "../data";

	const options = getOptions();

	let menu1 = $state(null),
		menu2 = $state(null),
		menu3 = $state(null);

	let message = $state("");
	function clicked(ev) {
		const action = ev.action;
		message = action ? `clicked on ${action.id}` : "closed";
		menu1 = menu2 = menu3 = null;
	}
</script>

<div class="demo-status">{message}</div>

<div class="demo-box">
	<h3>Bottom menu</h3>
	<Button type="primary" onclick={ev => (menu1 = ev.target)}>Click me</Button>
	{#if menu1}
		<Menu {options} parent={menu1} onclick={clicked} />
	{/if}
</div>

<div class="demo-box">
	<h3>Right-side menu</h3>
	<Button type="primary" onclick={ev => (menu2 = ev.target)}>Click me</Button>
	{#if menu2}
		<Menu {options} parent={menu2} onclick={clicked} at={"right"} />
	{/if}
</div>

<div class="demo-box">
	<h3>Menu at cursor</h3>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="box" onclick={ev => (menu3 = ev)}>Click me</div>
	{#if menu3}
		<Menu
			{options}
			left={menu3.clientX + 5}
			top={menu3.clientY + 5}
			onclick={clicked}
			at={"right"}
		/>
	{/if}
</div>

<style>
	.box {
		width: 400px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		border: var(--wx-border);
	}
</style>
