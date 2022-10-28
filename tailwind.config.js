/** @type {import('tailwindcss').Config} */

module.exports = { 
	darkMode: 'class',
	theme: {
		darkSelector: '.dark-mode',
		extend: {
			colors: {
				'purple': '#8330C2',
				'purple-hover': '#7226AB',
				'purple-transculent': '#F3EAF9',
				'purple-transculent-hover': '#E9DAF3',
				'purple-background': '#9942DB',
				'purple-light': '#A66CD1',

				'blue': '#4B6CEE',
				'blue-background': '#7226AB',
				'blue-translucent': '#4B6CEE',

				'gray-dark': '#999999',
				'gray-base': '#CACACA',
				'gray-border': '#EEEEEE',
				'grey-light': '#999999',

				'green': '#00C784',
				'green-hover': '#80E3C2',
				'green-transculent': '#E6F9F3',
				'green-dark': '#27A670',

				'orange': '#EDAB00',
				'orange-hover': '#F6D580',
				'orange-transculent': '#FDF7E6',
				'orange-dark': '#E27A3F',

				'red': '#DA3737',
				'red-hover': '#EC9B9B',
				'red-transculent': '#F9E0E0',
				
				'black': '#000000',
				'black-overlay': 'rgba(0, 0, 0, 0.8)',
				'pink': '#D33D6F',
				'cain': '#2999A8',
				'white': '#FFFFFF',
			}
		}
    },
	variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
		borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
		textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
    },
	plugins: [require('tailwindcss-dark-mode')()],
	content: [
		'components/**/*.vue',
		'layouts/**/*.vue',
		'pages/**/*.vue',
		'plugins/**/*.js',
		'nuxt.config.js'
	],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: false,
		config: {},
		injectPosition: 0,
		viewer: true,
	},
	colorMode: {
		preference: 'system',
		fallback: 'light',
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme'
	} 
}