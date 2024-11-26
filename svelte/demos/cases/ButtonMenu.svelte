<script>
	import { Button } from "wx-svelte-core";
	import { DropDownMenu } from "../../src/index";
	import { getProjects } from "../data";

	const options = getProjects();

	let label = $state("Select project");
	function change(ev) {
		console.log(ev);
		const action = ev.action;
		if (action) {
			// active = action.id;
			label = ev.action.text;
		}
	}
</script>

<div class="demo-box">
	<h3>Button with list of options</h3>

	<div style="display: flex;flex-direction: row;">
		<DropDownMenu {options} onclick={change}>
			<Button type="primary">{label}</Button>
		</DropDownMenu>
		<div>&nbsp;</div>
		<DropDownMenu {options}>
			<Button type="secondary">Fixed</Button>
		</DropDownMenu>
	</div>
</div>
