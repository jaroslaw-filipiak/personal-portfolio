export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: true,

    generate: {
        subFolders: false,
    },

    head: {
        title: 'Projektowanie stron www -  tylko profesjonalne strony firmowe ',
        'google-site-verification': 'W-qUXQGw2KAvWh5Y72PI2PLI1aY6ZcwGUbApZBoQdyM',
        htmlAttrs: {
            lang: 'pl',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-analytics',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxt/http',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-buil d
    build: {},
    // router: {
    //   base: '/test/',
    // },

    googleAnalytics: {
        id: 'UA-57493749-5',
    },
    loading: {
        color: 'DodgerBlue',
        height: '10px',
        continuous: true,
        duration: 3000,
    },
};
