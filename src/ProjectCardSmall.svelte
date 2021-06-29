<script>
	export let project;
	export let imagePath;
	let hidden = false;
</script>

<div
	class="card-wrapper-small"
	on:mouseover={() => {
		hidden = true;
	}}
	on:mouseleave={() => {
		hidden = false;
	}}
>
	<div class:hidden class="front">
		<img
			alt={project.description_short}
			src={`${imagePath}${project.thumb}`}
		/>
	</div>
	<div class:hidden={!hidden} class="back">
		<h2>
			{project.title}
		</h2>
		<p>
			{project.description_short}
		</p>
	</div>
</div>

<style>
	li {
		list-style-type: none;
	}
	.card-wrapper-small {
		border-radius: 5px;
	}
	.front {
		width: 150px;
		height: 150px;
		/* border: 1px solid black; */
		border-radius: 5px;
	}
	.back {
		width: 150px;
		height: 150px;
		border-radius: 5px;
		background-color: red;
	}
	.front img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}
	.hidden {
		display: none;
	}
</style>
