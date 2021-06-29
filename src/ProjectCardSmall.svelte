<script>
	import { slide } from 'svelte/transition';
	export let project;
	export let imagePath;
	let shadeUp = true;
</script>

<div
	class="card-wrapper-small"
	on:mouseover={() => {shadeUp = false;}}
	on:mouseleave={() => {shadeUp = true;}} 
>
	<div class="thumb">
		<img
			alt={project.description_short}
			src={`${imagePath}${project.thumb}`}
		/>
	</div>
	{#if !shadeUp}
		<div 
			class:shadeUp 
			class="shade"
			transition:slide
		>
			<h2>
				{project.title}
			</h2>
			<p>
				{project.description_short}
			</p>
		</div>
	{/if}
</div>

<style>
	.card-wrapper-small {
		border-radius: 5px;
		position: relative;
	}
	.thumb {
		width: 150px;
		height: 150px;
		/* border: 1px solid black; */
		border-radius: 5px;
	}
	.thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}
	.shade {
		width: 150px;
		height: 150px;
		border-radius: 5px;
		background-color: rgba(0,0,0,0.75);
		position: absolute;
		top: 0;
		overflow: hidden;
		color: var(--scarlet)
	}
	.shadeUp {
		height: 0px;
		overflow: hidden;
	}
</style>
