<script>
	import { Button, Portal } from "wx-svelte-core";
	import { Menu } from "../../src/index";

	import { getOptions } from "../../demos/data";

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

<div class="ex spaced">
	<Button type="primary" click={ev => (menu1 = ev.target)}>
		Click me (bottom menu)
	</Button>
	{#if menu1}
		<Portal>
			{#snippet children({ mount })}
				<Menu {options} parent={menu1} onclick={clicked} {mount} />
			{/snippet}
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
		<Portal>
			{#snippet children({ mount })}
				<Menu
					{options}
					parent={menu2}
					onclick={clicked}
					at={"right"}
					{mount}
				/>
			{/snippet}
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
		<Portal>
			{#snippet children({ mount })}
				<Menu
					{options}
					parent={menu3}
					onclick={clicked}
					at={"left"}
					{mount}
				/>
			{/snippet}
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
