<script>
	import { Button } from "wx-svelte-core";
	import { DropDownMenu } from "../../src/index";
	import { getProjects } from "../data";

	const options = getProjects();
	let active = "a";

	let label;
	$: {
		options.forEach(a => {
			if (a.id === active) {
				label = a.text;
				a.icon = "wxi-check";
			} else {
				a.icon = "wxi-empty";
			}
		});
	}

	function change(ev) {
		const action = ev.detail.action;
		if (action) active = action.id;
	}
</script>

<div class="demo-box">
	<h3>Button with list of options</h3>

	<div style="display: flex;flex-direction: row;">
		<DropDownMenu {options} on:click={change}>
			<Button type="primary">{label}</Button>
		</DropDownMenu>
		<div>&nbsp;</div>
		<DropDownMenu {options}>
			<Button type="secondary">Fixed</Button>
		</DropDownMenu>
	</div>
</div>
