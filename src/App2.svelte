<script>
	// export let name;
	import ProjectCard from "./ProjectCard.svelte";
	import { quintOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === "none" ? "" : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
			};
		},
	});

	let uid = 0;
	let projects = [
		{
			id: uid++,
			selected: true,
			image: "imgtest1",
			title: "B & C",
			desc: "Ecommerce website clone",
		},
		{
			id: uid++,
			selected: false,
			image: "imgtest2",
			title: "Wanderlust",
			desc: "Travel app",
		},
		{
			id: uid++,
			selected: false,
			image: "imgtest3",
			title: "What's in the fridge?",
			desc: "Recipe lookup app",
		},
		{
			id: uid++,
			selected: false,
			image: "imgtest4",
			title: "Tunr",
			desc: "AWS backend",
		},
		{
			id: uid++,
			selected: false,
			image: "imgtest5",
			title: "Sketchup Docs",
			desc: "construction documents and renders",
		},
		{
			id: uid++,
			selected: false,
			image: "imgtest6",
			title: "pixelspiro",
			desc: "Canvas spirograph toy",
		},
	];

	let selectedProject = projects.filter((p) => p.selected)[0];
	console.log("selected project", selectedProject);

	function handleToggle(event) {
		const key = event.detail.key;
		projects[projects.findIndex((p) => p.selected)].selected = false;
		projects[projects.findIndex((p) => p.id === key)].selected = true;
		selectedProject = projects.filter((p) => p.selected)[0];
	}
</script>

<header>header</header>

<main>
	<section id="about">About</section>
	<section id="work">
		<div>
			<div 
				class="selected-project"
				in:receive={{ key: project.id }}
				out:send={{key: project.id }}
			>
				<ProjectCard
					key={selectedProject.id}
					selected
					on:toggle={handleToggle}
				>
					<div slot="img-container">{selectedProject.image}</div>
					<div slot="card-title">{selectedProject.title}</div>
					<div slot="card-description">{selectedProject.desc}</div>
				</ProjectCard>
			</div>
		</div>
		<div>
			{#each projects.filter((p) => !p.selected) as project, i}
				<div 
					class="project-menu" 
					in:receive={{ key: project.id }}
					out:send={{key: project.id }}
				>
					<ProjectCard
						key={project.id}
						unselected
						on:toggle={handleToggle}
					>
						<div slot="img-container">{project.image}</div>
						<div slot="card-title">{project.title}</div>
						<div slot="card-description">{project.desc}</div>
					</ProjectCard>
				</div>
			{/each}
		</div>
	</section>
	<section id="contact">Contact</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	#about {
		height: 100vh;
	}
	#work {
		height: 100vh;
		display: flex;
		flex-direction: column;
		width: 800px;
		gap: 20px;
	}
	#work > div:first-of-type {
		height: 60vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#work > div:last-of-type {
		height: 20vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}
	#contact {
		height: 100vh;
	}
	div.selected-project{
		width: 100%;
		height: 100%;
		background-color:green;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>



