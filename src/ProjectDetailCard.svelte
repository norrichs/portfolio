<script>
	export let project;
	// export const key;

	// console.log(project)
</script>

<article class='detail-wrapper' style={`background-image: url(${project.image})`}>
	<div class='image-container'>

	</div>
	<div class='detail-container'>
		<h2>{project.title}</h2>
		<p>{project.description}</p>
		<p>{project.stack}</p>
		<div><span><a href={project.github}>github</a></span><span><a href={project.live}>live</a></span></div>
	</div>
</article>






<style>
	article.detail-wrapper{
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-radius: 5px;
	}
	.detail-container{
		background-color: rgba(255,255,255,0.75);
	}
</style>