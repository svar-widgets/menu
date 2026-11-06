<script lang="ts">
	import { Button } from "@svar-ui/svelte-core";
	import { ActionMenu } from "@svar-ui/svelte-menu";
	import type { IMenuOption, IMenuOptionClick } from "@svar-ui/svelte-menu";
	import { getProjects } from "../data";

	const options = getProjects();
	let active = $state(["a", "b", "c", "d"]);
	const byId = (id: string) => options.find(a => a.id === id);

	function filterMenu(option: IMenuOption, item: number) {
		if (option.id === active[item]) {
			option.icon = "wxi-check";
		} else {
			option.icon = "wxi-empty";
		}
		return true;
	}

	function clicked(ev: IMenuOptionClick) {
		const { context, option } = ev;
		if (option) active[context] = option.id as string;
	}

	let menu = $state<ReturnType<typeof ActionMenu>>();
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
		<Button onclick={ev => menu?.show(ev, i)}>
			{byId(item)?.text}
		</Button>
		&nbsp;
	{/each}
</div>
