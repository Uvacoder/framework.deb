import { Library } from '@framework/system/src/models/library'

export const libraryTags = [
	'Vue 2',
	'Vue 3',
	'3D',
	'a11y',
	'state management',
	'data fetching',
	'graphQL',
	'HTTP client',
	'styling',
	'CSS in JS',
	'utility-first CSS',
	'CSS processor',
	'CSS modules',
	'webpack',
	'component library',
	'forms',
	'redux',
	'framework',
	'static site generation',
	'server side rendering',
	'documentation',
	'testing',
	'storybook',
	'routing',
	'animation',
	'component',
	'internationalization',
	'nuxt',
] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: 'Quasar',
		author: 'Razvan Stoenescu',
		gitHubRepo: 'quasarframework/quasar',
		npmPackage: 'quasar',
		href: 'https://quasar.dev',
		description:
			'Effortlessly build high-performance & high-quality Vue.js 3 and Vue.js 2 user interfaces in record time',
		image: 'https://upload.wikimedia.org/wikipedia/en/2/29/Quasar_Logo.png',
		tags: ['component library', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Element UI',
		author: 'ElemeFE',
		gitHubRepo: 'ElemeFE/element',
		npmPackage: 'element-ui',
		href: 'https://element.eleme.io/',
		description: 'A Vue.js 2.0 UI Toolkit for Web.',
		image: 'https://iconape.com/wp-content/png_logo_vector/element-ui.png',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Element Plus',
		author: 'Element Plus',
		gitHubRepo: 'element-plus/element-plus',
		npmPackage: 'element-plus',
		href: 'https://element-plus.org/',
		description: 'A Vue 3 based component library for designers and developers',
		image: 'https://element-plus.org/images/element-plus-logo.svg',
		tags: ['component library', 'Vue 3'],
	},
	{
		name: 'Vuetify',
		author: 'John Jeremy Leider',
		gitHubRepo: 'vuetifyjs/vuetify',
		npmPackage: 'vuetify',
		href: 'https://vuetifyjs.com/',
		description:
			'Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.',
		image: 'https://iconape.com/wp-content/png_logo_vector/vuetify-logo.png',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Vuesax',
		author: 'lusaxweb',
		gitHubRepo: 'lusaxweb/vuesax-next',
		npmPackage: 'vuesax',
		href: 'https://vuesax.com/',
		description:
			'Components for Vuejs. We love what we do. Let us help you do what You love.',
		image: 'https://vuesax.com/logos/logo-vuesax-svg-7.svg',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Bootstrap vue',
		author: 'BootstrapVue',
		gitHubRepo: 'bootstrap-vue/bootstrap-vue',
		npmPackage: 'bootstrap-vue',
		href: 'https://bootstrap-vue.org/',
		description:
			'BootstrapVue provides one of the most comprehensive implementations of the Bootstrap v4.5 component and grid system available for Vue.js v2.6, complete with extensive and automated WAI-ARIA accessibility markup.',
		image:
			'https://github.com/bootstrap-vue/bootstrap-vue/raw/master/static/banner.png',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Keen UI',
		author: 'Josephus Paye II',
		gitHubRepo: 'JosephusPaye/Keen-UI',
		npmPackage: 'keen-ui',
		href: 'https://josephuspaye.github.io/Keen-UI',
		description:
			"Keen UI is a Vue 2 UI library with a simple API, inspired by Google's Material Design.",
		image: '',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Ant Design Vue',
		author: 'ant-design-vue',
		gitHubRepo: 'vueComponent/ant-design-vue',
		npmPackage: 'ant-design-vue',
		href: 'https://www.antdv.com/docs/vue/introduce/',
		description:
			'Following the Ant Design specification, we developed a Vue UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.',
		image:
			'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
		tags: ['component library', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Fish UI',
		author: 'myliang',
		gitHubRepo: 'myliang/fish-ui',
		npmPackage: 'fish-ui',
		href: 'https://myliang.github.io/fish-ui/#/components/index',
		description: 'A Vue 2 UI Toolkit for Web.',
		image:
			'https://github.com/myliang/fish-ui/raw/master/static/logo.png?raw=true',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Equal',
		author: 'quatrochan',
		gitHubRepo: 'quatrochan/Equal',
		npmPackage: 'equal-vue',
		href: 'https://quatrochan.github.io/Equal/',
		description:
			'Equal UI is a Vue 3 components library with 30+ components based on TypeScript and personal design system.',
		image: 'https://quatrochan.github.io/Equal/eqqqual.png',
		tags: ['component library', 'Vue 3'],
	},
	{
		name: 'Buefy',
		author: 'Rafael Beraldo',
		gitHubRepo: 'vueComponent/ant-design-vue',
		npmPackage: 'buefy',
		href: 'https://buefy.org/',
		description:
			'Following the Ant Design specification, we developed a Vue UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.',
		image: 'https://buefy.org/static/img/buefy.1d65c18.png',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'PrimeVUE',
		author: 'PrimeTek',
		gitHubRepo: 'primefaces/primevue',
		npmPackage: 'primevue',
		href: 'https://www.primefaces.org/primevue/',
		description:
			'PrimeVue is a rich set of open source UI Components for Vue. See PrimeVue homepage for live showcase and documentation.',
		image:
			'https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg',
		tags: ['component library', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Vuikit',
		author: 'Miljan Aleksic',
		gitHubRepo: 'vuikit/vuikit',
		npmPackage: 'vuikit',
		href: 'https://vuikit.js.org/',
		description:
			'A responsive Vue 2 UI library for web site interfaces based on the UIkit 3 framework.',
		image: 'https://vuikit.js.org/img/vuikit-logo-large.1eeb1a0a.svg',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Chakra UI',
		author: 'Jonathan Bakebwa',
		gitHubRepo: 'chakra-ui/chakra-ui-vue',
		npmPackage: '@chakra-ui/vue',
		href: 'https://vue.chakra-ui.com/',
		description:
			'Chakra UI gives you a set of accessible and composable Vue components that you can use to build your favourite applications and sites. Made for Vue 2.X',
		image: '',
		tags: ['component library', 'Vue 2'],
	},

	{
		name: 'Vue Material',
		author: 'Marcos Moura, Creative Tim & Community',
		gitHubRepo: 'vuematerial/vue-material',
		npmPackage: 'vue-material',
		href: 'https://vuematerial.io/',
		description:
			'Vue Material is Simple, lightweight and built exactly according to the Google Material Design specs',
		image:
			'https://camo.githubusercontent.com/046e9e47577f961eb9a8468ca73de80a0f3e8de2d15796db2797ae5211a88245/68747470733a2f2f7777772e63726561746976652d74696d2e636f6d2f7675656d6174657269616c2f6173736574732f6c6f676f2d636f6c6f722e706e67',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Mint UI',
		author: 'mint-ui',
		gitHubRepo: 'ElemeFE/mint-ui',
		npmPackage: 'mint-ui',
		href: 'http://mint-ui.github.io/#!/en',
		description: 'Mobile UI elements for Vue 2.0',
		image: '',
		tags: ['component library', 'Vue 2'],
	},

	{
		name: 'Semantic UI Vue',
		author: 'Mario Lamacchia',
		gitHubRepo: 'Semantic-UI-Vue/Semantic-UI-Vue',
		npmPackage: 'semantic-ui-vue',
		href: 'https://semantic-ui-vue.github.io/',
		description:
			"Semantic UI Vue is the Vue integration for Semantic UI. It is highly inspired on Semantic UI React If you have used it already, you will find Semantic UI Vue's API to be almost the same.",
		image:
			'https://raw.githubusercontent.com/Semantic-UI-Vue/Semantic-UI-Vue/master/docs/public/static/images/logo.png',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Vectre',
		author: 'Vadim Tiukov',
		gitHubRepo: 'vectrejs/vectre',
		npmPackage: '@vectrejs/vectre',
		href: 'https://vectrejs.github.io/docs/',
		description: 'A Lightweight, Simple and Responsive Component Framework',
		image: 'https://vectrejs.github.io/docs/img/logo.3b9b2fe3.svg',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Vant UI',
		author: 'Youzan',
		gitHubRepo: 'youzan/vant',
		npmPackage: 'vant',
		href: 'https://vant-contrib.gitee.io/vant/#/en-US/',
		description: 'Mobile UI Components built on Vue',
		image: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
		tags: ['component library', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Naive UI',
		author: 'TuSimple',
		gitHubRepo: 'TuSimple/naive-ui',
		npmPackage: 'naive-ui',
		href: 'https://www.naiveui.com/',
		description:
			'A Vue 3 Component Library. Fairly Complete, Customizable Themes, Uses TypeScript, Not Too Slow. Kinda Interesting.',
		image: 'https://www.naiveui.com/assets/naivelogo.93278402.svg',
		tags: ['component library', 'Vue 3'],
	},
	{
		name: 'Vuestic UI',
		author: 'Epicmax',
		gitHubRepo: 'epicmaxco/vuestic-ui',
		npmPackage: 'vuestic-ui',
		href: 'https://vuestic.dev/',
		description: 'Vue 3.0 UI Framework',
		image: '',
		tags: ['component library', 'Vue 3'],
	},
	{
		name: 'Agnostic UI',
		author: 'AgnosticUI',
		gitHubRepo: 'AgnosticUI/agnosticui',
		npmPackage: 'agnostic-vue',
		href: 'https://www.agnosticui.com/',
		description:
			'AgnosticUI is a set of UI primitives that start their lives in clean HTML and CSS. These standards compliant components are then copied to our framework implementations in: React, Vue 3, Svelte, and Angular (experimental).',
		image: '',
		tags: ['component library', 'Vue 3'],
	},
	{
		name: 'AT-UI',
		author: 'O2Team',
		gitHubRepo: 'at-ui/at-ui',
		npmPackage: 'at-ui',
		href: 'https://github.com/at-ui/at-ui',
		description:
			'AT-UI is a modular front-end UI framework for developing fast and powerful web interfaces based on Vue.js.',
		image:
			'https://camo.githubusercontent.com/1c853ebd899a4287544a0c9268ff5455f6ea42af19f38ce47a68ac1c05552a25/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d6174313530323731383232313638362e737667',
		tags: ['component library', 'Vue 2'],
	},
	{
		name: 'Pinia',
		author: 'Eduardo San Martin Morote',
		gitHubRepo: 'vuejs/pinia',
		npmPackage: 'pinia',
		href: 'https://pinia.vuejs.org/',
		description: 'The Vue Store that you will enjoy using',
		image: 'https://pinia.vuejs.org/logo.svg',
		tags: ['state management', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Vuex',
		author: 'Evan You',
		gitHubRepo: 'vuejs/vuex',
		npmPackage: 'vuex',
		href: 'https://vuex.vuejs.org/',
		description:
			'Vuex is a state management pattern + library for Vue.js applications.',
		image: 'https://github.com/vuejs.png',
		tags: ['state management', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Vue Apollo',
		author: 'Apollo GraphQL, Guillaume Chau',
		gitHubRepo: 'vuejs/apollo',
		npmPackage: '@vue/apollo-composable',
		href: 'https://v4.apollo.vuejs.org/',
		description: 'Integrate GraphQL in your Vue.js apps!',
		image: 'https://github.com/apollographql.png',
		tags: ['state management', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'XState',
		author: 'David Khourshid',
		gitHubRepo: 'statelyai/xstate',
		npmPackage: 'xstate',
		href: 'https://xstate.js.org/docs/packages/xstate-vue/#xstate-vue',
		description:
			'JavaScript and TypeScript finite state machines and statecharts for the modern web.',
		image: 'https://github.com/statelyai.png',
		tags: ['state management', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Swrv',
		author: 'Kong',
		gitHubRepo: 'Kong/swrv',
		npmPackage: 'swrv',
		href: 'https://xstate.js.org/docs/packages/xstate-vue/#xstate-vue',
		description: 'Stale-while-revalidate data fetching for Vue.',
		image: 'https://raw.githubusercontent.com/Kong/swrv/master/logo.png',
		tags: ['data fetching', 'Vue 3'],
	},
	{
		name: 'TailwindCSS',
		author: 'Adam Wathan & Jonathan Reinink',
		gitHubRepo: 'tailwindlabs/tailwindcss',
		npmPackage: 'tailwindcss',
		href: 'https://tailwindcss.com/docs/guides/vite',
		description:
			'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
		image: 'https://github.com/tailwindlabs.png',
		tags: ['styling', 'utility-first CSS', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Sass',
		author: 'Google',
		gitHubRepo: 'sass/dart-sass',
		npmPackage: 'sass',
		href: 'https://sass-lang.com/',
		description:
			'Sass is a very mature, stable, and powerful professional grade CSS extension language. It provides a superset of CSS with features like nesting, variables, imports and mixins.',
		image: 'https://github.com/sass.png',
		tags: ['styling', 'CSS processor', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Vanilla Extract',
		author: 'SEEK',
		gitHubRepo: 'seek-oss/vanilla-extract',
		npmPackage: '@vanilla-extract/css',
		href: 'https://vanilla-extract.style/',
		description:
			'Use TypeScript as your preprocessor. Write type‑safe, locally scoped classes, variables and themes, then generate static CSS files at build time.',
		image: 'https://github.com/seek-oss.png',
		tags: [
			'styling',
			'CSS processor',
			'CSS in JS',
			'CSS modules',
			'Vue 2',
			'Vue 3',
		],
	},
	{
		name: 'styled-components',
		author: 'Glen Maddern & Maximilian Stoiber',
		gitHubRepo: 'styled-components/styled-components',
		npmPackage: 'styled-components',
		href: 'https://www.styled-components.com/',
		description:
			'Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!',
		image: 'https://github.com/styled-components.png',
		tags: ['styling', 'CSS in JS', 'Vue 2', 'Vue 3'],
	},
	{
		name: 'Vuelidate',
		author: 'Vuelidate',
		gitHubRepo: 'vuelidate/vuelidate',
		npmPackage: 'vuelidate',
		href: 'https://vuelidate-next.netlify.app/',
		description:
			'Vuelidate 2 is a simple, but powerful, lightweight model-based validation for Vue.js 3 and 2.',
		image: 'https://github.com/vuelidate.png',
		tags: ['forms'],
	},
	{
		name: 'FormKit',
		author: 'FormKit, Inc',
		gitHubRepo: 'formkit/formkit',
		npmPackage: '@formkit/vue',
		href: 'https://formkit.com/',
		description:
			'A Vue form building framework that simplifies form structure, generation, validation, theming, submission, error handling, and more.',
		image: 'https://github.com/formkit.png',
		tags: ['forms'],
	},
	{
		name: 'Astro',
		author: 'Fred K. Schott',
		gitHubRepo: 'withastro/astro',
		npmPackage: 'astro',
		href: 'https://astro.build/',
		image: 'https://github.com/withastro.png',
		tags: ['framework', 'static site generation'],
		description:
			'Astro is a fresh but familiar approach to building websites. Astro combines decades of proven performance best practices with the DX improvements of the component-oriented era. Use your favorite JavaScript framework and automatically ship the bare-minimum amount of JavaScript—by default.',
	},
	{
		name: 'NuxtJs',
		author: 'Nuxt Team',
		gitHubRepo: 'nuxt',
		npmPackage: 'nuxt',
		href: 'https://nuxtjs.org/',
		image: 'https://github.com/nuxt.png',
		tags: ['framework', 'server side rendering', 'static site generation'],
		description:
			'Build your next Vue.js application with confidence using Nuxt. An open source framework making web development simple and powerful.',
	},
	{
		name: 'Vue I18n',
		author: 'Kazuya Kawaguchi',
		gitHubRepo: 'kazupon/vue-i18n',
		npmPackage: 'vue-i18n',
		href: 'https://kazupon.github.io/vue-i18n/',
		image: 'https://kazupon.github.io/vue-i18n/vue-i18n-logo.png',
		tags: ['internationalization'],
		description: 'Vue I18n is internationalization plugin for Vue.js',
	},
	{
		name: 'Harlem',
		author: 'Andrew Courtice',
		gitHubRepo: 'andrewcourtice/harlem',
		npmPackage: '@harlem/core',
		href: 'https://harlemjs.com/',
		image: 'https://harlemjs.com/assets/images/logo-192.svg',
		tags: ['state management', 'Vue 3'],
		description:
			'Simple, unopinionated, lightweight and extensible state management for Vue 3',
	},
]
