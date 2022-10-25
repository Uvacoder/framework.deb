import { Community } from "@framework/system/src/models/community"

export const communityTags = ["meetups", "conferences"] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "Forum Vuejs",
		description:
			"The best place to ask questions and get answers about Vue and its ecosystem.",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "forum",
		href: "https://forum.vuejs.org/",
		tags: [],
	},
	{
		name: "Vue Meetup / State of Vue",
		description:
			"This Dot Media presents Vue Contributor Day! The goal of this event is to not only give important updates to the community, but also as a forum to provide a voice for anyone using Vue.js to have direct access to core contributors and authors of various libraries and frameworks through live chat and an online broadcast.",
		image: "https://github.com/thisdot.png",
		type: "Live Events",
		href: "https://www.vuemeetup.com/",
		tags: ["meetups"],
	},
	{
		name: "DigitalOcean Community",
		description:
			"DigitalOcean Community is a blog related to general Web development, with categories spanning across CSS, general JavaScript, and frameworks like Vue",
		image: "https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg",
		type: "forum",
		href: "https://www.digitalocean.com/community/tags/vue-js",
		tags: [],
	},
	{
		name: "VueConf Toronto",
		description:
			"VueConf Toronto is a Canadian conference with talks and workshops from Vue.js core team members and industry experts.",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "Live Events",
		href: "https://www.vuetoronto.com/",
		tags: ["conferences"],
	},
	{
		name: "Nuxt Nation",
		description: "One of the largest Nuxt conferences in the world.",
		image: "https://nuxtnation.com/images/thumbnail2.jpg",
		type: "Online Events",
		href: "https://nuxtnation.com/",
		tags: ["conferences"],
	},
	{
		name: "Vue Day",
		description:
			"This is an online and in person conference dedicated to all things Vue",
		image: "https://2022.vueday.it/assets/favicons/apple-touch-icon.png",
		type: "Online and Live Events",
		href: "https://2022.vueday.it/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Amsterdam",
		description: "One of the largest Vue conferences in the world",
		image:
			"https://img2.storyblok.com/277x0/filters:format(png)/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png",
		type: "Live Events",
		href: "https://vuejs.amsterdam/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Global Summit",
		description: "Online global summit to discuss all things Vue.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Online Events",
		href: "https://events.geekle.us/vuejs/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Live",
		description: "Online and in person conference to discuss all things Vue.",
		image: "https://media.graphassets.com/PPiw9QmiRNOPj7mTQFTq",
		type: "Online and Live Events",
		href: "https://vuejslive.com/",
		tags: ["conferences"],
	},
	{
		name: "Front Stage",
		description:
			"Online conference dedicated to all things frontend web development.",
		image: "https://frontdevstage.com/wp-content/uploads/2021/11/logo.png",
		type: "Online Events",
		href: "https://frontdevstage.com/",
		tags: ["conferences"],
	},
	{
		name: "DevOps Days Brazil",
		description: "Conference dedicated to all things DevOps",
		image:
			"https://d33wubrfki0l68.cloudfront.net/7a77fd38eb1462fc4832f0ada827477cb17d5cbd/ae21b/events/2022-rio-de-janeiro/logo-square.jpg",
		type: "Live Events",
		href: "https://devopsdays.org/events/2022-rio-de-janeiro/welcome/",
		tags: ["conferences"],
	},
	{
		name: "Connect.Tech",
		description: "The largest Frontend framework conference in the USA.",
		image: "https://2022.connect.tech/_nuxt/img/ctlogo.fb612ee.png",
		type: "Live Events",
		href: "http://connect.tech",
		tags: ["conferences"],
	},
	{
		name: "Jamstack",
		description:
			"Jamstack Conf is for engineers, technology leaders, and digital agencies who are embracing the next evolution of modern web development architecture.",
		image: "https://jamstack.org/conf/assets/logo-jamstack-mark.56918026.svg",
		type: "Live and Online Events",
		href: "https://jamstack.org/conf/",
		tags: ["conferences"],
	},
	{
		name: "WORLDWIDE SOFTWARE ARCHITECTURE SUMMIT",
		description:
			"This is a conference dedicated to architects, CTOs and founders.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Live Events",
		href: "https://events.geekle.us/wsas4/",
		tags: ["conferences"],
	},
	{
		name: "PASS Data Community Summit 2022",
		description:
			"Reconnect with old friends, build new relationships, gain new skills, and get the world-class training you need to take that next step in your data career.",
		image:
			"https://passdatacommunitysummit.com/assets/images/pass-2022-logo-microsoft--dark.svg",
		type: "Live Events",
		href: "https://passdatacommunitysummit.com/",
		tags: ["conferences"],
	},
	{
		name: "DevOps Days India",
		description:
			"DevopsDays India is a technical event run by volunteers from India as part of the worldwide DevOpsDays series covering topics such as software development, IT infrastructure operations, and the intersection between them.",
		image: "https://devopsdaysindia.org/img/sprites/logo.svg",
		type: "Live Events",
		href: "https://devopsdaysindia.org/",
		tags: ["conferences"],
	},
	{
		name: "Data Science Global Summit",
		description:
			"3 days of the most valuable trends of the last 6 months from the best community of Data Scientists.",
		image:
			"https://events.geekle.us/data-science2/static/media/creative.c008843b.png",
		type: "Live Events",
		href: "https://events.geekle.us/data-science2/",
		tags: ["conferences"],
	},
	{
		name: "Xtremejs",
		description:
			"Professional development conference dedicated to all things JavaScript.",
		image:
			"https://xtremejs.dev/2022/wp-content/uploads/2022/04/xtremejs_new_logo-1.png",
		type: "Online Events",
		href: "https://xtremejs.dev/",
		tags: ["conferences"],
	},
	{
		name: "Cyber Security & Cloud Congress Global",
		description:
			"Expand your knowledge and gain the security skills needed to steer your organization to a more secure future.",
		image:
			"https://www.cybersecuritycloudexpo.com/global/wp-content/uploads/2018/07/cyber-cloud-icon-200x200.png",
		type: "Live Events",
		href: "https://www.cybersecuritycloudexpo.com/global/",
		tags: ["conferences"],
	},
	{
		name: "DevTernity",
		description:
			"Turning developers into architects and engineering leaders since 2015.",
		image: "https://devternity.com/images/favicon.png",
		type: "Live Events",
		href: "https://devternity.com/",
		tags: ["conferences"],
	},
	{
		name: "World Of No Code Conf",
		description: "This is a conference dedicated to all things no code.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Online Events",
		href: "https://events.geekle.us/nocode/",
		tags: ["conferences"],
	},
	{
		name: "QConfSF",
		description:
			"QCon San Francisco brings together the world's most innovative senior software engineers, architects and team leads across multiple domains to share their real-world implementation of emerging trends and practices.",
		image: "https://qconsf.com/sites/qcon_sf/files/favicon_0.ico",
		type: "Live Events",
		href: "https://qconsf.com/",
		tags: ["conferences"],
	},
	{
		name: "International Javascript Conference",
		description: "Conference dedicated to full stack JavaScript development",
		image:
			"https://javascript-conference.com/wp-content/uploads/2019/10/IJS_London20_Website_Logo_Header_53632_v1.png",
		type: "Live Events",
		href: "https://javascript-conference.com/",
		tags: ["conferences"],
	},
	{
		name: "All Things Open",
		description:
			"A technology conference focusing on the tools, processes and the people making open source responsible.",
		image:
			"https://www.allthingsopen.org/wp-content/themes/ato_2020/favicon-32.png",
		type: "Live Events",
		href: "https://allthingsopen.org/",
		tags: ["conferences"],
	},
	{
		name: "Global Summit for Node.js 23",
		description: "This conference is dedicated to all things Node.js.",
		image:
			"https://events.geekle.us/nodejs2/static/media/creative.7cd9e67b.png",
		type: "Live Events",
		href: "https://events.geekle.us/nodejs2/",
		tags: ["conferences"],
	},
	{
		name: "Js World Conf",
		description:
			"Global conference connecting JavaScript leaders from around the world.",
		image:
			"https://a.storyblok.com/f/84560/x/628ee206a3/logo-frontendlove-whitebg.svg/m/",
		type: "Live Events",
		href: "https://usa.jsworldconference.com/",
		tags: ["conferences"],
	},
	{
		name: "Node Congress",
		description:
			"A two-day conference on all things Node.js, Edge-native workers (Cloudflare & others), Serverless, Deno & other JavaScript backend run times.",
		image: "https://nodecongress.com/img/ogImage.png",
		type: "Live Events",
		href: "https://nodecongress.com/",
		tags: ["conferences"],
	},
	{
		name: "Typescript Congress",
		description:
			"TS Congress is an online event for web developers on all things TypeScript",
		image: "https://typescriptcongress.com/img/logo.svg",
		type: "Live Events",
		href: "https://typescriptcongress.com/",
		tags: ["conferences"],
	},
	{
		name: "JS Conf Chile",
		description:
			"2 days of international speakers, community, learning and connections.",
		image: "https://jsconf.cl/favicon-32x32.png",
		type: "Live Events",
		href: "https://jsconf.cl/",
		tags: ["conferences"],
	},
	{
		name: "ConFoo",
		description:
			"ConFoo Montreal is a multi-technology conference for developers.",
		image: "https://confoo.ca/images/design/logo.gif",
		type: "Live Events",
		href: "https://confoo.ca",
		tags: ["conferences"],
	},
	{
		name: "JS Game Dev Summit",
		description:
			"JavaScript GameDev Summit is a 2-day online event for engineers, technical artists, and creative developers who develop games and graphics-heavy applications with Web technology. ",
		image: "https://jsgamedev.com/img/logo.svg",
		type: "Live Events",
		href: "https://jsgamedev.com/",
		tags: ["conferences"],
	},
	{
		name: "DevOps Day LA",
		description: "Los Angeles based event dedicated to all things DevOps.",
		image:
			"https://d33wubrfki0l68.cloudfront.net/fba174b19270a1db8de8910558e38b4fdabc4dcc/5515d/img/devopsdays-brain.png",
		type: "Live Events",
		href: "https://devopsdays.org/events/2023-los-angeles/welcome/",
		tags: ["conferences"],
	},
	{
		name: "SXSW",
		description:
			"The SXSW Conference provides an opportunity for the global community of digital creatives to encounter cutting-edge ideas, discover new interests, and network with other professionals who share a similar appetite for forward-focused experiences.",
		image: "https://www.sxsw.com/wp-content/themes/wp-theme-sxsw/favicon.png",
		type: "Live Events",
		href: "https://www.sxsw.com/conference/",
		tags: ["conferences"],
	},
	{
		name: "Web3 Tech Summit",
		description: "A tech summit dedicated to all things Web3.",
		image:
			"https://events.geekle.us/data-science2/static/media/creative.c008843b.png",
		type: "Live Events",
		href: "https://events.geekle.us/web3/",
		tags: ["conferences"],
	},
	{
		name: "Javaland 2023",
		description:
			"A conference packed with lectures, community activities, an accompanying exhibition, workshops, exchange and networking with a unique amusement park flair.",
		image:
			"https://www.javaland.eu/typo3conf/ext/doag/Resources/Public/Images/logo_javaland.png",
		type: "Live Events",
		href: "https://www.javaland.eu/de/home/",
		tags: ["conferences"],
	},
	{
		name: "Tech Unite Africa",
		description:
			"Tech Unite Africa is a conference, exhibition and a networking platform for the African Tech industry.",
		image:
			"https://techuniteafrica.com/wp-content/uploads/2021/08/Tech-Unite-Africa-New-Logo-8.png",
		type: "Live Events",
		href: "https://techuniteafrica.com/",
		tags: ["conferences"],
	},
	{
		name: "Render ATL",
		description:
			"An Atlanta conference covering all things Design/CSS, Leadership & Entrepreneurship, Product & Project Management, Web/Mobile Software Engineering, and so much more.",
		image:
			"https://s.mkswft.com/RmlsZTo0MDE3YzM4OC1hYjdkLTRlZWEtOWUyMi0wNTgxMmI5YjJjZDU=/favicon.png",
		type: "Live Events",
		href: "https://www.renderatl.com/",
		tags: ["conferences"],
	},
	{
		name: "CSS Day Conf",
		description:
			"CSS Day Conf features a mix of CSS designers, developers, spec writers and browser vendors, who take pride in what they know and do.",
		image: "https://cssday.nl/_img/2022/sold-out-2.png",
		type: "Live Events",
		href: "https://cssday.nl/2022",
		tags: ["conferences"],
	},
	{
		name: "Front Conference",
		description: "Conference where design meets technology.",
		image: "https://frontconference.com/static/neon.svg",
		type: "Live Events",
		href: "https://frontconference.com/",
		tags: ["conferences"],
	},
	{
		name: "JsNation 2023",
		description:
			"A conference dedicated to the latest trends in JavaScript development.",
		image:
			"https://d33wubrfki0l68.cloudfront.net/9e3b2b2e7d375ad7003010a688bf021e994fc591/1b06b/img/logo.svg",
		type: "Live Events",
		href: "jsnation.com",
		tags: ["conferences"],
	},
	{
		name: "JSDay IE Ireland",
		description:
			"A tech conference dedicated to the JavaScript community in Ireland.",
		image: "https://www.jsday.ie//media/jslogo.png?imwidth=64",
		type: "Live Events",
		href: "https://www.jsday.ie/",
		tags: ["conferences"],
	},
]
