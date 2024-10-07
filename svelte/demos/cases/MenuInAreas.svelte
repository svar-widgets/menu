<script>
	import { Button, ModalArea, SideArea, Popup } from "wx-svelte-core";
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
	let modal = false;
	let sidebar = false;
	let popup = false;
</script>

<div class="buttons">
	<Button click={() => (modal = true)} text={"Open modal"} />
	<Button click={() => (popup = true)} text={"Open popup"} />
	<Button click={() => (sidebar = true)} text={"Open sidebar"} />
</div>

{#if popup}
	<Popup left={20} top={100} cancel={() => (popup = false)}>
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
	</Popup>
{/if}

{#if modal}
	<ModalArea>
		<div class="toolbar">
			<Button icon="wxi-close" click={() => (modal = false)} />
		</div>
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
	</ModalArea>
{/if}

{#if sidebar}
	<SideArea on:close={() => (sidebar = false)}>
		<div class="toolbar">
			<Button icon="wxi-close" click={() => (sidebar = false)} />
		</div>
		<div class="demo-box">
			<h3>Action menu</h3>
			<p>Click on any button</p>
			<ActionMenu
				{options}
				at="left"
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
