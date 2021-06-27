<script>
	import { quintOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { flip } from "svelte/animate";
	import ProjectDetailCard from "./ProjectDetailCard.svelte";
	import ProjectCardSmall from "./ProjectCardSmall.svelte";
	import Fa from "svelte-fa/src/fa.svelte";
	import { faFlag } from "@fortawesome/free-solid-svg-icons";
	import { data }  from "./data.js";
	
	let projects = data;

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

<main>
	<section id="about">
		<div class="photo" />
		<div class="title" />
		<div>
			<p>
				Ben is working to be a full stack developer. He comes to the
				field following time in biochemistry research, neuroscience,
				carpentry, and Design/Build administration He has a passion for
				making things easier. Let's automate away the bullshit
			</p>
		</div>
	</section>
	<section id="projects">
		<div class="selected">
			{#each projects.filter((t) => t.selected) as project (project.id)}
				<div
					class="card-wrapper selected"
					in:receive={{ key: project.id, duration: 300 }}
					out:send={{ key: project.id, duration: 300 }}
					animate:flip={{ duration: 400 }}
				>
					<ProjectDetailCard {project} />
				</div>
			{/each}
		</div>

		<div class="menu">
			{#each projects.filter((t) => !t.selected) as project (project.id)}
				<div
					class="card-wrapper"
					in:receive={{ key: project.id, duration: 300 }}
					out:send={{ key: project.id, duration: 300 }}
					animate:flip={{ duration: 400 }}
					on:click={() => mark(project, true)}
				>
					<ProjectCardSmall {project} />
				</div>
			{/each}
		</div>
	</section>
	<section id="contacts" />
</main>

<style>
	main {
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}
	section {
		height: 100vh;
	}
	#about {
		background-color: moccasin;
	}
	#projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		scroll-snap-align: end;
	}
	.selected {
		width: 1000px;
		height: 60vh;
		padding: 20px;
	}
	.menu {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;
	}
	div.card-wrapper {
		position: relative;
	}

	div.card-wrapper.selected {
		/* border: 1px solid magenta; */
		height: 100%;
		padding: 0;
		margin: 0;
	}
</style>
