<script>
	let { item } = $props();
</script>

<div>
	<span class="avatar">&nbsp;</span>
	<span>{item.name}</span>
</div>

<style>
	div {
		white-space: nowrap;
	}
	span {
		display: inline-block;
		height: 26px;
		line-height: 26px;
	}
	.avatar {
		width: 26px;
		border-radius: 26px;
		background-color: blueviolet;
		margin-right: 3px;
	}
</style>
