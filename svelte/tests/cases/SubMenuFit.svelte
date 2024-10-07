<script>
	import { Button, Portal } from "wx-svelte-core";
	import { Menu } from "../../src/index";

	import { getOptions } from "../../demos/data";

	const options = getOptions();

	let menu1 = null,
		menu2 = null,
		menu3 = null;

	let message = "";
	function clicked(ev) {
		const action = ev.detail.action;
		message = action ? `clicked on ${action.id}` : "closed";
		menu1 = menu2 = menu3 = null;
	}
</script>

<div class="demo-status">{message}</div>

<div class="ex spaced">
	<Button type="primary" click={ev => (menu1 = ev.target)}>
		Click me (bottom menu)
	</Button>
	{#if menu1}
		<Portal let:mount>
			<Menu {options} parent={menu1} on:click={clicked} {mount} />
		</Portal>
	{/if}
	<Button type="primary" click={ev => (menu1 = ev.target)}>
		Click me (bottom menu)
	</Button>
</div>

<div class="ex spaced">
	<Button type="primary" click={ev => (menu2 = ev.target)}>
		Click me (right menu)
	</Button>
	{#if menu2}
		<Portal let:mount>
			<Menu
				{options}
				parent={menu2}
				on:click={clicked}
				at={"right"}
				{mount}
			/>
		</Portal>
	{/if}
	<Button type="primary" click={ev => (menu2 = ev.target)}>
		Click me (right menu)
	</Button>
</div>

<div class="ex spaced">
	<Button type="primary" click={ev => (menu3 = ev.target)}>
		Click me (left menu)
	</Button>
	{#if menu3}
		<Portal let:mount>
			<Menu
				{options}
				parent={menu3}
				on:click={clicked}
				at={"left"}
				{mount}
			/>
		</Portal>
	{/if}
	<Button type="primary" click={ev => (menu3 = ev.target)}>
		Click me (left menu)
	</Button>
</div>

<div class="ex spaced">
	<Button
		icon="wxi-edit"
		type="primary"
		click={ev => (menu1 = ev.currentTarget)}
	/>
	<Button
		icon="wxi-edit"
		type="primary"
		click={ev => (menu2 = ev.currentTarget)}
	/>
	<Button
		icon="wxi-edit"
		type="primary"
		click={ev => (menu3 = ev.currentTarget)}
	/>
	<Button
		icon="wxi-edit"
		type="primary"
		click={ev => (menu1 = ev.currentTarget)}
	/>
</div>

<style>
	.ex {
		padding: 30px 30px 0 30px;
	}
	.spaced {
		display: flex;
		justify-content: space-between;
	}
</style>
