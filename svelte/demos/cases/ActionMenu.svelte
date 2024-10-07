<script>
	import { Button } from "wx-svelte-core";
	import { ActionMenu } from "../../src/index";
	import { getProjects } from "../data";

	const options = getProjects();
	let active = ["a", "b", "c", "d"];
	const byId = id => options.find(a => a.id === id);

	function filterMenu(v, item) {
		if (v.id === active[item]) {
			v.icon = "wxi-check";
		} else {
			v.icon = "wxi-empty";
		}
		return true;
	}

	function clicked(ev) {
		const { context, action } = ev.detail;
		if (action) active[context] = action.id;
	}

	let showMenu;
</script>

<div class="demo-box">
	<h3>Action menu</h3>
	<p>Click on any button</p>
	<ActionMenu
		{options}
		filter={filterMenu}
		on:click={clicked}
		bind:handler={showMenu}
	/>
	{#each active as item, i}
		<Button click={ev => showMenu(ev, i)} value={active[i]}>
			{byId(item).text}
		</Button>
	{/each}
</div>
