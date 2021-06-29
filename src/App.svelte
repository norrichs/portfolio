<script>
	import { quintOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { flip } from "svelte/animate";
	import ProjectDetailCard from "./ProjectDetailCard.svelte";
	import ProjectCardSmall from "./ProjectCardSmall.svelte";
	import Fa from "svelte-fa/src/fa.svelte";
	import { faFlag } from "@fortawesome/free-solid-svg-icons";
	import { data } from "./data.js";
	import "ress/dist/ress.min.css";

	const imagePath = "../img/";

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
	let hidden = true;
</script>

<main>
	<header>
		<h1>Ben Norrichs</h1>
		<h2></h2>
	</header>
	<section id="about">
		<div class="title">
			<h2>About</h2>
		</div>
		<div class="photo"><img src={`${imagePath}ben_brownshirt800.jpg`} alt="ben"/></div>
		<div class="copy">
			<aside>	Full-stack developer with experience across a wide variety of knowledge domains, I bring agile and deep problem-solving focus. 
				I will quickly understand your team's goals and help you achieve them in any working environment. <span>Let’s build something awesome.</span></aside>
			<br>
		</div>
		<div class="stack">
			<aside>
				I completed the General Assembly bootcamp in 2021 as the fulcrum of a career shift. 
				After earning a BS in Biochemistry and molecular biology, working in research and going to graduate school for Neuroscience,
				I left academia to build homes.<br>
				After 5 years in the field and another 5 in the office, it became clear to me that there was a common thread running through my career - 
				A drive to develop and use tech as tool for growing efficiency and understanding, while limiiting tedium.<br>
				As a developer, I bring a strong drive to innnovate and transoform how we get things done.
			</aside>
			<h2>Tech Stack</h2>
			<ul>
				<li>Javascript / HTML / CSS </li>
				<li>NodeJS</li>
				<li>MongoDB</li>
				<li>PostgreSQL</li>
				<li>DynamoDB</li>
				<li>ExpressJS</li>
				<li>AWS API Gateway</li>
				<li>AWS Lambda</li>
				<li>ReactJS</li>
				<li>SvelteJS</li>
				<li>Sass</li>
				<li>Bootstrap</li>
				<li>Milligram</li>

			</ul>
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
					<ProjectDetailCard {project} {imagePath} />
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
					<ProjectCardSmall {project} {imagePath} />
				</div>
			{/each}
		</div>
	</section>

	<footer id="contact">
		<form class:hidden>
			<div><div class="close" on:click={()=>{hidden=true}}>X</div></div>
			<input type="text" placeholder="your name" />
			<input type="email" placeholder="your email" />
			<input type="textarea" placeholder="your message" />
			<button type="submit">Let's talk!</button>
		</form>
		<div>
			Making it work in<br />
			Amherst, MA<br />
			<a href="mailto:ben.norrichs@gmail.com">ben.norrichs@gmail.com</a>
		</div>
		<div
			on:mouseover={() => {
				hidden = false;
			}}
		>
			Contact Me ^
		</div>
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/ben-norrichs-478994ab/" target="_blank"
					>LI</a
				>
			</li>
			<li><a href="https://github.com/norrichs" target="_blank">GH</a></li>
			<li>
				<a href="https://app.codesignal.com/profile/norrichs" target="_blank">CS</a>
			</li>
			<li><a href="https://www.facebook.com/ben.norrichs" target="_blank">FB</a></li>
		</ul>
	</footer>
</main>

<style>
	:root{
		/* CSS HEX
		--pewter-blue: #88a2aaff;
		--grullo: #ada296ff;
		--middle-red: #e2856eff;
		--scarlet: #f42c04ff;
		--rich-black-fogra-29: #0f1a20ff;
		 */
		/* CSS HSL */
		--pewter-blue: hsla(194, 17%, 60%, 1);
		--grullo: hsla(31, 12%, 63%, 1);
		--middle-red: hsla(12, 67%, 66%, 1);
		--scarlet: hsla(10, 97%, 49%, 1);
		--rich-black-fogra-29: hsla(201, 36%, 9%, 1);

		/* Assignments */
		--site-background: var(--rich-black-fogra-29);
		--box-color: var(--pewter-blue);
		--highlighted-text: var(--scarlet);

		--footer-height: 75px;
	}


	li {
		list-style-type: none;
	}
	main {

		scroll-snap-type: y mandatory;
		background-color: var(--site-background);
	}
	h1{
		font-size: 3em;
	}
	h2{
		font-size: 2em;
	}
	header{
		height: 50px;
	}
	#about {
		height: calc( 100vh - 50px );
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 3em 1fr 1fr;
		grid-template-areas:
			' t p c '
			' t l l ';
	}

	#about>.title{
		grid-area: t;
	}
	#about > .title > h2{
		border: 1px solid green;
		text-orientation: sideways;
		writing-mode: vertical-rl;
		position: -webkit-sticky;
		position: sticky;
		display: flex;
		flex-direction: column;
		height: 100px;
		margin: 20px auto;
	}
	#about>.photo{
		grid-area: p;
	}
	#about>.copy{
		grid-area: c;
	}

	#about aside {
		font-size: 1.75em;
		margin-bottom: 2em;
	}
	#about div{
		border: 1px solid;
	}
	#about .stack{grid-area: l}
	#about .stack ul{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 30px;
		justify-content: center;
	}

	#about img{
		width: 40vh;
	}

	/* Projects section */
	#projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		height: calc( 100vh - 100px );
		scroll-snap-align: end;
	}
	/* #contact{

	} */
	.selected {
		width: 1000px;
		max-width: 95vw;
		height: 60vh;
		padding: 20px;
	}
	.menu {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
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
	/* Contact section */
	#contact {
		width: 100vw;
		background-color: var(--box-color);
		height: var(--footer-height);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10px;
		position: relative;
		color: var(--highlighted-text);
	}
	#contact > ul {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
	#contact > form {
		position: absolute;
		background-color: rosybrown;
		bottom: 100px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 4fr 1fr;
	}
	#contact > form input {
		background-color: powderblue;
	}
	#contact > form input:nth-of-type(1) {
		grid-row: 2 / 3;
		grid-column: 1 / 2;
	}
	#contact > form input:nth-of-type(2) {
		grid-row: 2 / 3;
		grid-column: 2 / 3;
	}
	#contact > form input:nth-of-type(3) {
		grid-row: 3 / 4;
		grid-column: 1 / 3;
	}

	#contact > form div{
		grid-row: 1 / 2;
		grid-column: 1 / 3;
		display: flex;
		justify-content: flex-end;
	}
	#contact .close{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2em;
		width: 2em;
		background-color: black;
		color: white;
	}
	#contact > form button:nth-of-type(2) {
		grid-row: 4 / 5;
		grid-column: 1 / 3;
	}
	#contact > form.hidden {
		display: none;
	}
</style>
