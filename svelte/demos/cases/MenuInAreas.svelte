<script>
	import { Button, ModalArea, SideArea, Popup } from "@svar-ui/svelte-core";
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

	let menu1 = $state();
	let menu2 = $state();
	let menu3 = $state();
	let modal = $state(false);
	let sidebar = $state(false);
	let popup = $state(false);
</script>

<div class="buttons">
	<Button onclick={() => (modal = true)} text={"Open modal"} />
	<Button onclick={() => (popup = true)} text={"Open popup"} />
	<Button onclick={() => (sidebar = true)} text={"Open sidebar"} />
</div>

{#if popup}
	<Popup left={200} top={100} oncancel={() => (popup = false)}>
		<div class="demo-box">
			<h3>Action menu</h3>
			<p>Click on any button</p>
			<ActionMenu
				{options}
				filter={filterMenu}
				onclick={clicked}
				bind:this={menu1}
			/>
			{#each active as item, i}
				<Button onclick={ev => menu1.show(ev, i)} value={active[i]}>
					{byId(item).text}
				</Button>
			{/each}
		</div>
	</Popup>
{/if}

{#if modal}
	<ModalArea>
		<div class="toolbar">
			<Button icon="wxi-close" onclick={() => (modal = false)} />
		</div>
		<div class="demo-box">
			<h3>Action menu</h3>
			<p>Click on any button</p>
			<ActionMenu
				{options}
				filter={filterMenu}
				onclick={clicked}
				bind:this={menu2}
			/>
			{#each active as item, i}
				<Button onclick={ev => menu2.show(ev, i)} value={active[i]}>
					{byId(item).text}
				</Button>
			{/each}
		</div>
	</ModalArea>
{/if}

{#if sidebar}
	<SideArea oncancel={() => (sidebar = false)}>
		<div class="toolbar">
			<Button icon="wxi-close" onclick={() => (sidebar = false)} />
		</div>
		<div class="demo-box">
			<h3>Action menu</h3>
			<p>Click on any button</p>
			<ActionMenu
				{options}
				at="left"
				filter={filterMenu}
				onclick={clicked}
				bind:this={menu3}
			/>
			{#each active as item, i}
				<Button onclick={ev => menu3.show(ev, i)} value={active[i]}>
					{byId(item).text}
				</Button>
			{/each}
		</div>
	</SideArea>
{/if}

<style>
	.buttons {
		margin: 20px;
		display: flex;
		gap: 20px;
	}

	.demo-box {
		padding: 40px;
	}

	.toolbar {
		padding: 20px;
	}

	.toolbar:first-child {
		float: right;
	}
</style>
