<script>
	import { Button, Text } from "wx-svelte-core";
	export let item;
	let value;
</script>

<div on:click={ev => ev.preventDefault()}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div style="width: 120px; padding-right: 8px;">
		<Text placeholder={item.name} bind:value />
	</div>
	<Button icon="wxi-delete" type="primary" on:click={() => (value = "")} />
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
	}
</style>
