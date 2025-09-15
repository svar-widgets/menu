<script>
	import { Button, Text } from "@svar-ui/svelte-core";
	let { item } = $props();
	let value = $state("");
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={ev => ev.preventDefault()}>
	<div style="width: 120px; padding-right: 8px;">
		<Text placeholder={item.name} bind:value />
	</div>
	<Button icon="wxi-delete" type="primary" onclick={() => (value = "")} />
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
	}
</style>
