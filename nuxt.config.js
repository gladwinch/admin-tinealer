require('dotenv').config()

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Tinealer (admin)',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	server: {
		port: 3001
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/stylelint
		// '@nuxtjs/stylelint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
    [ '@nuxtjs/dotenv', { filename: '.env' } ],
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/auth-next',
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	tailwindcss: {
		configPath: '~/tailwind.config.js'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	auth: {
		redirect: {
			login: "/login",
			logout: "/",
			callback: false,
			home: "/dashboard"
		},
		strategies: {
			local: false,
			cookie: {
				prefix: 'express:sess',
				user: {
					property: "data",
				},
				endpoints: {
					login: { url: "/api/auth/login", method: "post" },
					logout: { url: "/api/auth/logout", method: "get" },
					user: { url: "/api/user", method: "get" }
				}
			}
		}
	},

	auth: {
		strategies: {
			local: {
				token: {
					property: 'token',
					global: true,
					// required: true,
					type: 'Bearer'
				},
				user: {
					property: 'user',
					// autoFetch: true
				},
					endpoints: {
					login: { url: '/api/auth/login', method: 'post' },
					logout: { url: '/api/auth/logout', method: 'post' },
					user: { url: '/api/auth/user', method: 'get' }
				}
			}
		}
	},

 	serverMiddleware: ['~/server/index.js']
}
