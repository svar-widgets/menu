<script>
	import { ContextMenu } from "../../src/index";
	import { getOptions } from "../data";

	const options = getOptions();

	let message = $state("");
	function clicked(ev) {
		const { context, action } = ev;
		message = action
			? `${action.id} for ${context.type} ${context.id}`
			: "closed";
	}

	const items = [
		{ id: -1, name: "Disabled", disabled: true },
		{ id: 1, name: "Project A", type: "project" },
		{ id: 2, name: "Task 1.0" },
		{ id: 3, name: "Project B", type: "project" },
		{ id: 4, name: "Task 2.1" },
		{ id: 5, name: "Task 2.2" },
	];
	function getItem(id) {
		const item = items.find(a => a.id == id);

		if (item.disabled) return null;
		return item;
	}
	function filterMenu(menu, item) {
		if (
			item.type === "project" &&
			typeof menu.id === "string" &&
			!menu.id.startsWith("add-task")
		)
			return false;

		return true;
	}
</script>

<div class="demo-status">{message}</div>

<div class="demo-box">
	<h3>Custom rules for context menu</h3>
	<p>Some items disabled, taks and project menu differs</p>
	<ContextMenu
		{options}
		resolver={getItem}
		filter={filterMenu}
		onclick={clicked}
	>
		{#each items as item (item.id)}
			<div
				data-context-id={item.id}
				class="item"
				class:disabled={item.disabled}
			>
				{item.name}
			</div>
		{/each}
	</ContextMenu>
</div>

<style>
	.item {
		width: 240px;
		border: var(--wx-border);
		text-align: center;
		margin: 10px;
		padding: 20px 40px;
		white-space: nowrap;
	}

	.disabled {
		background: var(--wx-background-alt);
	}
</style>
