<script>
	import { createEventDispatcher } from  'svelte'

	const dispatch = createEventDispatcher();

	function toggle(){
		dispatch('toggle', {
			key: key
		})
	}
	export let selected = false;
	export let unselected = false;
	export let key;

</script>

<article
	on:click={toggle}
	class:selected={selected}
	class:unselected = {unselected}
	class='project-card' >
	<div class='img-container'>
		{key}
		<slot name="img-container">
			default content
		</slot>
	</div>
	<div class='card-title'>
		<slot name="card-title">
			default content card
		</slot>
	</div>
	<div class='card-description'>
		<slot name="card-description">
			default content desc
		</slot>
	</div>
</article>



<style>
	.selected{
		width: 100%;
		height: 100%;
	}
	.unselected{
		width: 190px;
		height: 100%;	
	}
	.project-card{
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

	}
	.project-card:hover{
		background-color: rgb(226, 62, 33);
	}
	.project-card div{
		border: 1px solid lightblue;
	}

</style>