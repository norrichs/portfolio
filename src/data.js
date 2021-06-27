
let uid = 0;
export const data = [
	{
		id: uid++,
		selected: true,
		title: "Spirograph",
		description_short: "Canvas-based spirograph toy",
		description: "Older project, originally coded in 2011.  An experiment in using HTML Canvas to simulate the classic pen and gear toy 'spirograph'",
		stack: 'HTML, CSS, JS',
		image: "../img/canvas_spirograph.png",
		github: "https://github.com/norrichs/spiro",
		live: null,
	},
	{
		id: uid++,
		selected: false,
		title: "Circles",
		description_short: "Random clicker toy",
		description: "Older project, inspired by an interactive art-installation.  Combines a regular geometric display with stochastic, difficult to predict interactivity.",
		stack: 'HTML, CSS, JS',
		image: null,
		github: null,
		live: null
	},
	{ id: uid++, selected: false, 
		title: "What's in the fridge?",
		description_short: "Recipe lookup app",
		description: "Recipe lookup app intended for quickly finiding recipes based on on-hand ingredients.",
		stack: "React, spoonacular API",
		image: '',
		github: 'https://github.com/norrichs/whatsinfridge',
		planning: null,
		live: 'https://fridge.norrichs.com' 
	},
	{ id: uid++, selected: false, 
		title: "Wanderlust",
		description_short: "Travel agency app",
		description: "App build based on design documents published on Behance.  Facilitates comparison shopping between participating travel agencies offering multiple trips.  Works with multiple related data models.",
		stack: "React, mongoDb, ExpressJS",
		image: '',
		github: null,
		live: null 
	}
];
