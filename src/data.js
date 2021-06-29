
let uid = 0;
export const data = [
	{
		id: uid++,
		selected: true,
		title: "Spirograph",
		description_short: "HTML-canvas based spirograph simulator",
		description: "Older project, originally coded in 2011.  An experiment in using HTML Canvas to simulate the classic pen and gear toy 'spirograph'",
		stack: 'HTML, CSS, JS',
		image: "spiro.jpg",
		thumb: "th_spiro.jpg",
		links: [
			{source: "https://github.com/norrichs/spiro"},
			{live: null}
		],
		overlay: 'dark'
	},
	// {
	// 	id: uid++,
	// 	selected: false,
	// 	title: "Circles",
	// 	description_short: "Random clicker toy",
	// 	description: "Older project, inspired by an interactive art-installation.  Combines a regular geometric display with stochastic, difficult to predict interactivity.",
	// 	stack: 'HTML, CSS, JS',
	// 	image: null,
	// 	thumb: null,
	// 	links: [
	// 		{source: null},
	// 		{live: null} 
	// 	],
	// 	overlay: 'light'
	// },
	{ id: uid++, selected: false, 
		title: "What's in the fridge?",
		description_short: "Recipe lookup app",
		description: "Recipe lookup app intended for quickly finiding recipes based on on-hand ingredients.",
		stack: "React, spoonacular API",
		image: 'fridge.png',
		thumb: 'th_fridge.png',
		links: [
			{source: 'https://github.com/norrichs/whatsinfridge'},
			{planning: 'https://github.com/norrichs/whatsinfridge/blob/main/readme.md'},
			{live: 'https://fridge.norrichs.com' }

		],
		overlay: 'dark'
	},
	{ id: uid++, 
		selected: false, 
		title: "Wanderlust",
		description_short: "Travel agency app",
		description: "App build based on design documents published on Behance.  Facilitates comparison shopping between participating travel agencies offering multiple trips.  Works with multiple related data models.",
		stack: "React, mongoDb, ExpressJS",
		image: 'wanderlust.png',
		thumb: 'th_wanderlust.png',
		links: [
			{ planning: "https://www.notion.so/Wanderlust-fb6815a9795b417297e136c4b370c779"},
			{ backend: "https://github.com/norrichs/wanderlust-backend"},
			{ frontend: "https://github.com/norrichs/wanderlust-frontend"},
			{ live: "https://main.d3rz5j4fuubspj.amplifyapp.com/"} 
		],
		overlay: 'dark'
	},
	{
		id: uid++,
		selected: false,
		title: 'C&B - H&M clone',
		description_short: 'Clone of the H&M eCommerce site',
		description: 'Data-heavy implementation of the clean and well-designed H&M ecommerce site.  Backend built using AWS services, with a React frontend.',
		stack: "DynamoDB, API Gateway, AWS Lambda, ReactJS, Sass, Puppeteer (scraping)",
		image: 'bc_clone.png',
		thumb: 'th_bc_clone.png',
		links: [
			{ scraper: "https://github.com/norrichs/b-c-scraper" },
			{ frontend: "https://github.com/norrichs/CB-Clone-Project-FE" },
			{ live: "https://main.dvoayhklgwdgg.amplifyapp.com/" }
		],
		planning: "https://www.notion.so/Intro-88a3319a14d143a6a072af5261566cc6",
		overlay: 'dark'
	},
	{
		id: uid++,
		selected: false,
		title: 'Books app',
		description_short: 'Simple CRUD app used as coding practice',
		description: 'Simple database app for recording book information from your personal library.',
		stack: "MongoDB, Express, React, Node, Bulma",
		image: "book-app.png",
		thumb: "th_book-app.png",
		links: [
			{ "backend github": "https://github.com/norrichs/books-app-backend" },
			{ "frontend github": "https://github.com/norrichs/books-app-frontend" },
			{ live: "https://norrichs-book-app.netlify.app/"}
		],
		overlay: 'dark'
	},
	{
		id: uid++,
		selected: false,
		title: 'Construction Budget Template',
		description_short: 'Custom construction budget template built in Google Sheets and Google App Script',
		description: 'Flexible spreadsheet-based budget template.  Key features include a nested, heirarchical organization with subtotalling, option comparisons, progress tracking and lookups to standard price lists',
		stack: "Google Sheets, Google App Scripts, Quickbooks",
		image: "budget_template.png",
		thumb: "th_budget_template.png",
		links: [
			{ backend: ""},
			{ frontend: ""},
			{ live: "" }
		],
		overlay: 'dark'
	},
	{
		id: uid++,
		selected: false,
		title: 'Estimate vs Actual Analysis Sheet',
		description_short: 'Estimate vs. Actual analysis of construction projects',
		description: 'Flexible spreadsheet-based construction project financial anaylsis tool.  Aligns project budget with up-to-date labor, subcontractor, and materials costs and provides a customizable, flexible, filter view for viewing analysis at large-scale and granular levels.',
		stack: "Google Sheets, Google App Scripts, Quickbooks",
		image: "eva.png",
		thumb: "th_eva.png",
		links: [
			{ backend: "https://docs.google.com/spreadsheets/d/1Qcb3aaGmnVQFcTMEbcfRbb0oq2GvfZGjyhfKLGqNajA/edit#gid=193240821"},
			{ frontend: "https://docs.google.com/spreadsheets/d/1Qcb3aaGmnVQFcTMEbcfRbb0oq2GvfZGjyhfKLGqNajA/edit#gid=1827998451"}
		],
		overlay: 'dark'
	},
	{
		id: uid++,
		selected: false,
		title: 'Timesheet system',
		description_short: 'Custom timesheet system built in Google Sheets and Google App Script',
		description: 'Flexible, custom, timesheet system for a small construction business.  Collects task and client information from employees, and includes a manager approval system and error-checking mechanisms',
		stack: "Google Sheets, Google App Scripts, Quickbooks",
		image: "timesheet.png",
		thumb: "th_timesheet.png",
		links: [
			{ approvals: "https://docs.google.com/spreadsheets/d/1adJBCCOjf9LwXEWKG9xg836lp7Ua9TJRgdGEALD4j5Q/edit#gid=689120486"},
			{ timesheet: "https://docs.google.com/spreadsheets/d/1adJBCCOjf9LwXEWKG9xg836lp7Ua9TJRgdGEALD4j5Q/edit#gid=1420942738"},
			{ backend: "https://docs.google.com/spreadsheets/d/1adJBCCOjf9LwXEWKG9xg836lp7Ua9TJRgdGEALD4j5Q/edit#gid=391903253" }
		],
		overlay: 'dark'
	},
	{
		id: uid++,
		selected: false,
		title: 'Construction Documentation',
		description_short: 'Framing and detail plans for custom high-performance residences',
		description: 'Primarily working Sketchup, I have produced construction documentation for all phases of the design/build process, from Schematic Design to permit sets to highly specific framing plans and detailed shop drawings',
		stack: "Sketchup Pro, Layout",
		image: "cd.png",
		thumb: "th_cd.png",
		links: [
		
		],
		overlay: 'dark'
	}


];
