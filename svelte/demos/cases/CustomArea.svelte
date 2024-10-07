<script>
	import { ActionMenu } from "../../src/index";
	import { Icon } from "wx-svelte-core";

	const options = [
		{
			text: "Cut",
			icon: "wxi wxi-content-cut",
			onClick: ({ context }) => (message = `cut ${context}`),
		},
		{
			text: "Copy",
			icon: "wxi wxi-content-copy",
			onClick: ({ context }) => (message = `copy ${context}`),
		},
		{
			text: "Paste",
			icon: "wxi wxi-content-paste",
			onClick: ({ context }) => (message = `paste ${context}`),
		},
	];

	let message = "";
	function clicked(ev) {
		const { context, action } = ev.detail;
		message = action ? `${action.id} for item #${context}` : "closed";
	}

	const items = [
		{ id: 1, type: "project" },
		{ id: 2, type: "task" },
	];

	const resolver = id => id;
	const innerResolver = id => (id[0] == "b" ? id : null);
	const outerResolver = id => (id[0] == "c" ? id : null);
	var activate;
</script>

<div class="demo-status">{message}</div>

<ActionMenu at="right" {options} on:click={clicked} bind:handler={activate} />
<div class="demo-box">
	<h3>Action menu, icons</h3>
	<p>Click on menu "button"</p>
	{#each items as item (item.id)}
		<div class="item">
			<div class="icon">
				<Icon css="wxi-menu" on:click={ev => activate(ev, item.id)} />
			</div>
			<div class="title">{item.type} {item.id}</div>
		</div>
	{/each}
</div>

<div class="demo-box">
	<h3>Action menu, limited to specific areas</h3>
	<p>Click on menu "button"</p>
	<ActionMenu at="right" {options} on:click={clicked} {resolver}>
		{#each items as item (item.id)}
			<div class="item">
				<div data-context-id={item.id} class="menu">menu</div>
				<div class="title">{item.type} {item.id}</div>
			</div>
		{/each}
	</ActionMenu>
</div>

<div class="demo-box">
	<h3>Nested action menu, different menu for card and button areas</h3>
	<p>Click on menu "button" or on any card</p>
	<ActionMenu
		at="right"
		options={[{ id: 1, text: "inner menu" }]}
		resolver={innerResolver}
	>
		<ActionMenu
			at="point"
			{options}
			on:click={clicked}
			resolver={outerResolver}
		>
			{#each items as item (item.id)}
				<div class="item" data-context-id={"c" + item.id}>
					<div data-context-id={"b" + item.id} class="menu">menu</div>
					<div class="title">{item.type} {item.id}</div>
				</div>
			{/each}
		</ActionMenu>
	</ActionMenu>
</div>

<style>
	.item {
		width: 200px;
		height: 100px;
		line-height: 30px;
		border: var(--wx-border);
		text-align: left;
		margin: 10px;
		padding: 5px 10px;
	}
	.title {
		text-transform: uppercase;
	}
	.menu {
		float: right;
		border: var(--wx-border);
		border-radius: 2px;
		padding: 0 10px;
		cursor: pointer;
	}
	.icon {
		float: right;
		margin-right: 10px;
	}
</style>
