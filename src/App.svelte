<script>
	import { quintOut } from "svelte/easing";
	import { crossfade, slide } from "svelte/transition";
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

	async function postContactMessage(event) {
		event.preventDefault();
		hidden = true;
		const formValues = {
			name: event.target[0].value,
			email: event.target[1].value,
			message: event.target[2].value,
		};
		console.log("formValues", formValues);
		fetch(
			"https://982ayljk77.execute-api.us-east-2.amazonaws.com/dev/portfolioSend",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formValues),
			}
		).then((resp) => {
			console.log("fetch response", resp);
		});
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
		<h2>full - stack - developer</h2>
	</header>
	<section id="about">
		<div class="title"><h2>About</h2></div>
		<div class="photo">
			<img src={`${imagePath}ben_brownshirt800.jpg`} alt="ben" />
		</div>

		<aside class="copy">
			<p>
				Full-stack developer with experience across a wide variety of
				knowledge domains, I bring agile and deep problem-solving focus.
				I will quickly understand your team's goals and help you achieve
				them in any working environment.
			</p>
			<p><u>Let’s build something awesome.</u></p>
			<br />
		</aside>
		<aside class="copy">
			<p>
				I completed the <a href="https://www.generalassemb.ly/"
					>General Assembly</a
				> Software Engineering Intensive bootcamp in 2021 as the fulcrum
				of a career shift at this stage in my curious career progression.
			</p>
			<ul>
				<li>
					Earned a BS in Biochemistry and Molecular Biology from UC
					Santa Cruz in 2002
				</li>
				<li>
					Did research work at UC Berkeley (AIDS, Nutrition, Cancer -
					stable isotope labeling studies)
				</li>
				<li>
					Grad school at Brandeis University for Neuroscience
					(cellular bases of fruit-fly olfaction and mating behavior),
					earning a Masters degree.
				</li>
				<li>
					Left academia to start a family and work with my hands.
					Built houses, restored old barns, deep energy retrofits.
					Spent 5 years in the field.
				</li>
				<li>
					Moved into the office as a project manager, focusing on
					highly energy efficient residences. Both new homes and
					restorations / retrofits. Developed business systems for my
					company, including timesheet, budgeting and analysis systems
					in Google Sheets / Google App Scripts. Managed large
					projects. Designed and drafted project construction
					documents.
				</li>
				<li>
					It became clear to me that there was a common thread running
					through my career - A drive to develop and use tech as tool
					for growing efficiency and understanding, while limiiting
					tedium.
				</li>
				<li>
					Today, I am excited to work in technology as my main focus,
					with the best modern tools and practices.
				</li>
			</ul>
			As a developer, I bring a strong drive to innnovate and transform how
			we get things done.
		</aside>

		<div class="stack-title title"><h2>Stack</h2></div>
		<div class="stack">
			<ul>
				<li>Javascript / HTML / CSS</li>
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
		<div class="title"><h2>Projects</h2></div>
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
		{#if !hidden}
			<form
				class:hidden
				on:submit={(event) => postContactMessage(event)}
				transition:slide
			>
				<div>
					<div
						class="close"
						on:click={() => {
							hidden = true;
						}}
					>
						X
					</div>
				</div>
				<input type="text" placeholder="your name" name="name" />
				<input type="email" placeholder="your email" name="email" />
				<input
					type="textarea"
					placeholder="your message"
					name="message"
					wrap="soft"
				/>
				<button type="submit">Let's talk!</button>
			</form>
		{/if}
		<div>Making it work in Amherst, MA</div>
		<div
			on:mouseover={() => {
				hidden = false;
			}}
		>
			<h2>Contact Me ^</h2>
		</div>
		<ul>
			<li>
				<a
					href="https://www.linkedin.com/in/ben-norrichs-478994ab/"
					target="_blank">LI</a
				>
			</li>
			<li>
				<a href="https://github.com/norrichs" target="_blank">GH</a>
			</li>
			<li>
				<a
					href="https://app.codesignal.com/profile/norrichs"
					target="_blank">CS</a
				>
			</li>
			<li>
				<a href="https://www.facebook.com/ben.norrichs" target="_blank"
					>FB</a
				>
			</li>
		</ul>
	</footer>
</main>

<style>
	:root {
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
		--general-text: var(--grullo);

		/* --form-background: var(--grullo); */
		--form-background: hsla(31, 12%, 63%, 0.9);
		--form-inputs: var(--rich-black-fogra-29);
		--form-buttons: var(--scarlet);
		--form-button-text: var(--rich-black-fogra-29);

		--footer-height: 75px;
	}

	li {
		list-style-type: none;
	}
	main {
		color: var(--general-text);
		scroll-snap-type: y mandatory;
		background-color: var(--site-background);
	}
	h1 {
		font-size: 3em;
	}
	h2 {
		font-size: 2em;
	}
	header {
		padding: 10px 10px 30px 10px;
	}
	a {
		color: var(--highlighted-text);
		text-decoration: underline;
		transition: 2000ms;
	}
	a:hover {
		text-shadow: 0 0 20px var(--highlighted-text);
		transition: 50ms;
	}
	#about {
		min-height: calc(100vh - 50px);
		display: grid;
		/* gap: 20px; */
		/* grid-template-rows: 1fr 1fr; */
		grid-template-columns: 3em calc(40vh) 1fr 3em;
		grid-template-areas:
			" t  p  c1 ."
			" t  c2 c2 ."
			" t2 l  l  .";
	}

	.title {
		grid-area: t;
		color: var(--highlighted-text);
		border-right: 3px solid;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.title > h2 {
		text-orientation: sideways;
		writing-mode: vertical-rl;
		position: -webkit-sticky;
		position: sticky;
		display: flex;
		flex-direction: column;
		height: 100px;
		margin: 20px auto;
	}
	#about > .photo {
		grid-area: p;
	}
	#about > .copy:first-of-type {
		margin-left: 100px;
		max-width: 800px;
		grid-area: c1;
	}
	#about > .copy:last-of-type {
		grid-area: c2;
	}

	#about aside {
		font-size: 1.75em;
		margin: 2em;
		font-weight: 300;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	#about .copy ul {
		margin-left: 2em;
	}
	#about .copy li {
		font-size: 0.75em;
		list-style: circle;
		margin-bottom: 20px;
	}
	/* #about div{
		border: 1px solid;
	} */
	#about .stack-title {
		grid-area: t2;
	}
	#about div.stack {
		grid-area: l;
	}
	#about .stack ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 30px;
		justify-content: center;
		border: 1px solid;
		padding: 50px;
		margin: 0 150px;
		border-radius: 300px;
	}

	#about img {
		width: 40vh;
	}

	/* Projects section */
	#projects {
		display: grid;
		gap: 20px;
		height: calc(100vh - var(--footer-height));
		grid-template-rows: 60vh 1fr;
		grid-template-columns: 3em 1fr 1fr;
		grid-template-areas:
			" pt ps ps "
			" pt pm pm ";
	}
	#projects .title {
		grid-area: pt;
		color: var(--highlighted-text);
		border-right: 3px solid;
	}
	#projects .selected {
		grid-area: ps;
		width: 1000px;
		max-width: 95vw;
		height: 60vh;
		padding: 20px;
		margin: 0 auto;
	}
	#projects .menu {
		grid-area: pm;
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
		width: 100%;
		background-color: var(--box-color);
		height: var(--footer-height);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10px;
		position: relative;
		color: var(--highlighted-text);
		box-shadow: 0 0 50px 10px black;
	}
	#contact > ul {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
	#contact > form {
		position: absolute;
		background-color: var(--form-background);
		bottom: 100px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 4fr 1fr;
		box-shadow: 0 0 50px 10px black;
		padding: 5px;
	}
	#contact > form input {
		background-color: var(--form-inputs);
		color: var(--highlighted-text);
	}
	#contact > form input:nth-of-type(1) {
		grid-row: 2 / 3;
		grid-column: 1 / 2;
	}
	#contact > form input:nth-of-type(2) {
		grid-row: 2 / 3;
		grid-column: 2 / 3;
	}
	#contact > form input[type="textarea"] {
		grid-row: 3 / 4;
		grid-column: 1 / 3;
	}

	#contact > form div {
		grid-row: 1 / 2;
		grid-column: 1 / 3;
		display: flex;
		justify-content: flex-end;
	}
	#contact .close {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2em;
		width: 2em;
		background-color: black;
		color: white;
		background-color: var(--form-buttons);
		color: var(--form-button-text);
	}
	#contact > form > button {
		grid-row: 4 / 5;
		grid-column: 1 / 3;
		width: 100%;
		background-color: var(--form-buttons);
		color: var(--form-button-text);
	}
	#contact > form.hidden {
		display: none;
	}
</style>
