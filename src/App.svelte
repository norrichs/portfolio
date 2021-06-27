<script>
	import { quintOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { flip } from "svelte/animate";
	import ProjectDetailCard from './ProjectDetailCard.svelte'
	import Fa from 'svelte-fa/src/fa.svelte'
	import { faFlag } from '@fortawesome/free-solid-svg-icons'

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === "none" ? "" : style.transform;

			return {
				duration: 200,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
			};
		},
	});

	let uid = 1;

	let projects = [
		{
			id: uid++,
			selected: false,
			title: "Spirograph",
			description: "Canvas-based spirograph toy",
			image: "../img/canvas_spirograph.png",
			github: "https://github.com/norrichs/spiro",
			live: null,
		},
		{
			id: uid++,
			selected: false,
			title: "Circles",
			description: "Random clicker toy",
			image: null,
			github: null,
			live: null
		},
		{ id: uid++, selected: true, 
			title: "What's in the fridge?",
			description: "Recipe lookup app",
			image: '',
			github: null,
			live: null },
		{ id: uid++, selected: false, description: "mow the lawn" },
		{ id: uid++, selected: false, description: "feed the turtle" },
		{ id: uid++, selected: false, description: "fix some bugs" },
	];

	function remove(project) {
		projects = projects.filter((t) => t !== project);
	}

	function mark(project, selected) {
		projects[projects.findIndex((t) => t.selected)].selected = false;
		project.selected = selected;
		remove(project);
		projects = projects.concat(project);
	}
</script>

<div class="board">
	<div class="selected">
		{#each projects.filter((t) => t.selected) as project (project.id)}
			<div
				class="card-wrapper selected"
				in:receive={{ key: project.id , duration: 300}}
				out:send={{ key: project.id, duration: 300}}
				animate:flip={{ duration: 400 }}
			>
				<!-- {project.description} -->
				<Fa icon={faFlag}/>
				<ProjectDetailCard {project}/>
			</div>
		{/each}
	</div>

	<div class="menu">
		{#each projects.filter((t) => !t.selected) as project (project.id)}
			<div
				class="card-wrapper"
				in:receive={{ key: project.id, duration:300 }}
				out:send={{ key: project.id, duration: 300 }}
				animate:flip={{ duration: 400 }}
				on:click={() => mark(project, true)}
			>
				<!-- 				<input type=checkbox on:click={() => mark(project, true)}> -->
				{project.description}
			</div>
		{/each}
	</div>
</div>

<style>
	.board {
		display: flex;
		flex-direction: column;
		grid-gap: 1em;
		max-width: 36em;
		margin: 0 auto;
	}
	.selected {
		height: 300px;
		padding: 20px;
	}
	.menu {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	div.card-wrapper {
		position: relative;
		line-height: 1.2;
		padding: 0.5em 2.5em 0.5em 2em;
		margin: 0 0 0.5em 0;
		border-radius: 2px;
		user-select: none;
		border: 1px solid hsl(240, 8%, 70%);
		background-color: hsl(240, 8%, 93%);
		color: #333;
	}

	div.card-wrapper.selected {
		border: 1px solid hsl(240, 8%, 90%);
		background-color: lightsalmon;
		height: 100%;
	}
</style>
