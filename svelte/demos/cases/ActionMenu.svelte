<script>
	import { Button } from "@svar-ui/svelte-core";
	import { ActionMenu } from "../../src/index";
	import { getProjects } from "../data";

	const options = getProjects();
	let active = $state(["a", "b", "c", "d"]);
	const byId = id => options.find(a => a.id === id);

	function filterMenu(option, item) {
		if (option.id === active[item]) {
			option.icon = "wxi-check";
		} else {
			option.icon = "wxi-empty";
		}
		return true;
	}

	function clicked(ev) {
		const { context, option } = ev;
		if (option) active[context] = option.id;
	}

	let menu = $state();
</script>

<div class="demo-box">
	<h3>Action menu</h3>
	<p>Click on any button</p>
	<ActionMenu
		{options}
		filter={filterMenu}
		onclick={clicked}
		bind:this={menu}
	/>
	{#each active as item, i}
		<Button onclick={ev => menu.show(ev, i)} value={active[i]}>
			{byId(item).text}
		</Button>
		&nbsp;
	{/each}
</div>
