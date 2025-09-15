<script>
	import { Button } from "@svar-ui/svelte-core";
	import { ActionMenu } from "../../src/index";
	import { getProjects } from "../data";

	const options = getProjects();
	let active = $state(["a", "b", "c", "d"]);
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
		const { context, action } = ev;
		if (action) active[context] = action.id;
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
