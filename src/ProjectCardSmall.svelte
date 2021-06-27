<script>
	export let project
	let hidden = false;
	


</script>

<div class='card-wrapper-small'  on:mouseover={()=>{hidden=true}} on:mouseleave={()=>{hidden=false}}>
	<div class:hidden class="front">
		<img alt={project.description_short} src={project.image}/>
	</div>
	<div class:hidden={!hidden} class="back">
		{project.title}
	</div>

</div>


<style>
	.front{
		width: 150px;
		height: 150px;
		/* border: 1px solid black; */
		border-radius: 5px;
	}
	.back{
		width: 150px;
		height: 150px;
		border-radius: 5px;
		background-color: red;
	}
	.front img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}
	.hidden{
		display: none;
	}


</style>