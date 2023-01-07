export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: false,

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
            { title: 'Projektowanie stron www -  tylko profesjonalne strony firmowe' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Bezpłatna Wycena - Poproś o indywidualną wycenę!. Szybki kontakt',
            },

            { hid: 'og-type', property: 'og:type', content: 'website' },
            {
                hid: 'og-title',
                property: 'og:title',
                content: 'Projektowanie stron www -  tylko profesjonalne strony firmowe',
            },
            {
                hid: 'og-desc',
                property: 'og:description',
                content:
                    'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Bezpłatna Wycena - Poproś o indywidualną wycenę!. Szybki kontakt',
            },
            { hid: 'og-image', property: 'og:image', content: 'https://j-filipiak.pl/og-img.jpg' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

        script: [
            {
                hid: 'hotjar',
                innerHTML: `
			  (function(h,o,t,j,a,r){
				h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
				h._hjSettings={hjid:3304441,hjsv:6};
				a=o.getElementsByTagName("head")[0];
				r=o.createElement('script');r.async=1;
				r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
				a.appendChild(r);
			})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
			  `,
                type: 'text/javascript',
                charset: 'utf-8',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: `~/plugins/smooth.js` }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-analytics',
        '@nuxtjs/google-fonts',
    ],

    googleFonts: {
        download: true,
        prefetch: true,
        overwriting: true,
        families: {
            'Atkinson+Hyperlegible': {
                wght: [400, 700],
            },
            'Open Sans': {
                wght: [400, 700],
            },
            // Lato: [100, 300, 400],
        },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxt/http',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@nuxtjs/google-gtag',
    ],

    robots: {
        UserAgent: '*',
        Sitemap: 'https://j-filipiak.pl/sitemap.xml',
    },

    sitemap: {
        hostname: 'https://j-filipiak.pl',
        // options
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-buil d
    build: {},
    // router: {
    //   base: '/test/',
    // },

    googleAnalytics: {
        id: 'G-X4MDTE1EBE',
    },
    'google-gtag': {
        id: 'G-X4MDTE1EBE',
        // id: 'GTM-M7H5MHM',
        // G-X4MDTE1EBE
    },
    loading: {
        color: 'DodgerBlue',
        height: '10px',
        continuous: true,
        duration: 3000,
    },
};
