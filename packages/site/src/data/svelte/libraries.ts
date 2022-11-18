import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"state-management",
	"data fetching",
	"styling",
	"component library",
	"forms",
	"framework",
	"internationalization",
	"linting",
	"a11y",
	"HTTP client",
	"utility-first CSS",
	"preprocessor",
] as const

// The default image here for use
// on libraries that don't have an image
const defaultImage =
	"https://avatars.githubusercontent.com/u/23617963?s=200&v=4"

// TODO: Update the language fields to contain the correct language for package lookup

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "Axios",
		author: "Matt Zabriskie",
		repo: "https://www.github.com/axios/axios",
		package: "https://www.npmjs.com/package/axios",
		href: "https://axios-http.com/",
		description:
			"Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.",
		image: "https://github.com/axios.png",
		tags: ["data fetching", "HTTP client"],
		language: libraryTags[0],
	},
	{
		name: "TailwindCSS",
		author: "Adam Wathan & Jonathan Reinink",
		repo: "https://www.github.com/tailwindlabs/tailwindcss",
		package: "https://www.npmjs.com/package/tailwindcss",
		href: "https://tailwindcss.com/",
		description:
			"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
		image: "https://github.com/tailwindlabs.png",
		tags: ["styling", "utility-first CSS"],
		language: libraryTags[0],
	},
	{
		name: "Svelte Material UI",
		author: "hperrin",
		repo: "https://www.github.com/hperrin/svelte-material-ui",
		package: "https://www.npmjs.com/package/svelte-material-ui",
		href: "https://sveltematerialui.com/",
		description:
			"A library of Svelte Material UI components, based on Material Design Components - Web.",
		image: "https://sveltematerialui.com/icons/android-icon-192x192.png",
		tags: ["styling", "component library"],
		language: libraryTags[0],
	},
	{
		name: "Sveltestrap",
		author: "bestguy",
		repo: "https://www.github.com/bestguy/sveltestrap",
		package: "https://www.npmjs.com/package/sveltestrap",
		href: "https://sveltestrap.js.org/?path=/story/components--get-started",
		description:
			"A library that provides all Bootstrap 5 components for a Svelte app, without needing to use Bootstrap component classes or needing to include Bootstrap's JavaScript.",
		image: "https://github.com/bestguy.png",
		tags: ["styling", "component library"],
		language: libraryTags[0],
	},
	{
		name: "Svelte Forms",
		author: "chainlist",
		repo: "https://www.github.com/chainlist/svelte-forms",
		package: "https://www.npmjs.com/package/svelte-forms",
		href: "https://chainlist.github.io/svelte-forms/",
		description: "A form validation library for Svelte.",
		image: "https://github.com/chainlist.png",
		tags: ["forms"],
		language: libraryTags[0],
	},
	{
		name: "Svelte Formly",
		author: "dyaliCode",
		repo: "https://www.github.com/dyaliCode/svelte-formly",
		package: "https://www.npmjs.com/package/svelte-formly",
		href: "https://svelte-formly-ts-documentation.netlify.app/",
		description:
			"A good solution to generate and control a dynamic forms using core and custom rules with customize styles.",
		image: "https://github.com/dyaliCode.png",
		tags: ["forms"],
		language: libraryTags[0],
	},
	{
		name: "rx-svelte-forms",
		author: "MohamedElmdary",
		repo: "https://www.github.com/MohamedElmdary/rx-svelte-forms",
		package: "https://www.npmjs.com/package/rx-svelte-forms",
		href: "https://github.com/MohamedElmdary/rx-svelte-forms",
		description: "Reactive svelte forms inspired by angular reactive forms.",
		image: "https://github.com/MohamedElmdary.png",
		tags: ["forms"],
		language: libraryTags[0],
	},
	{
		name: "Sapper",
		author: "Svelte",
		repo: "https://www.github.com/sveltejs/sapper",
		package: "https://www.npmjs.com/package/sapper",
		href: "https://sapper.svelte.dev/",
		description:
			"Sapper is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.",
		image: defaultImage,
		tags: ["framework"],
		language: libraryTags[0],
	},
	{
		name: "svelte-i18n",
		author: "kaisermann",
		repo: "https://www.github.com/kaisermann/svelte-i18n",
		package: "https://www.npmjs.com/package/svelte-i18n",
		href: "https://github.com/kaisermann/svelte-i18n",
		image: "https://github.com/kaisermann.png",
		tags: ["internationalization"],
		description:
			"svelte-i18n helps you localize your app using the reactive tools Svelte provides. By using stores to keep track of the current locale, dictionary of messages and to format messages, we keep everything neat, in sync and easy to use on your svelte files.",
		language: libraryTags[0],
	},
	{
		name: "svelte-check",
		author: "Svelte",
		repo: "https://www.github.com/sveltejs/language-tools",
		package: "https://www.npmjs.com/package/svelte-check",
		href: "https://github.com/sveltejs/language-tools",
		image: defaultImage,
		tags: ["linting", "a11y"],
		description:
			"Svelte Language Tools contains a library implementing the Language Server Protocol (LSP). LSP powers the VSCode extension, which is also hosted in this repository. Additionally, LSP is capable of powering plugins for numerous other IDEs.",
		language: libraryTags[0],
	},
	{
		name: "Svelte Preprocess",
		author: "Svelte",
		repo: "https://www.github.com/sveltejs/svelte-preprocess",
		package: "https://www.npmjs.com/package/svelte-check",
		href: "https://github.com/sveltejs/svelte-preprocess",
		image: defaultImage,
		tags: ["preprocessor"],
		description:
			"A Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, Stylus, CoffeeScript, TypeScript, Pug and much more.",
		language: libraryTags[0],
	},
]
