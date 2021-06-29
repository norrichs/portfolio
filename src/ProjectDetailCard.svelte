<script>
	import { faLink } from "@fortawesome/free-solid-svg-icons";

	export let project;
	export let imagePath;
	// export const key;

	// console.log(project)
</script>

<article
	class="detail-wrapper"
	style={`background-image: url(${imagePath}${project.image})`}
>
	<div class="image-container" />
	<div class={`detail-container ${project.overlay}`}>
		<ul>
			<li><h2>{project.title}</h2></li>
			<li>
				<p>{project.description}</p>
			</li>
			<li>
				<p><span>Tech Stack: </span>{project.stack}</p>
			</li>
		</ul>
		<ul>
			{#each project.links as link}
				<li>
					<a href={link[Object.keys(link)[0]]}  target="_blank"
						>{Object.keys(link)[0]}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</article>

<style>
	li {
		list-style-type: none !important;
	}
	article.detail-wrapper {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-radius: 10px;
		object-fit: fill;
		box-sizing: border-box;
		/* border: 1px solid magenta; */
	}
	.detail-container {
		padding: 10px;
		border-radius: 0 10px 10px 0;
	}
	.detail-container li {
		margin-bottom: 10px;
	}
	.detail-container.dark {
		background-color: rgba(0, 0, 0, 0.85);
		color: tomato;
	}
	.detail-container.light {
		background-color: rgba(255, 255, 255, 0.75);
	}
</style>
