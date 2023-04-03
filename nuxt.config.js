export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  // mode: 'client',

  generate: {
    subFolders: false,
  },

  app: {
    pageTransition: false,
    layoutTransition: false,
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
      {
        title: 'Projektowanie stron www -  tylko profesjonalne strony firmowe',
      },
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
        content:
          'Projektowanie stron www -  tylko profesjonalne strony firmowe',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content:
          'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Bezpłatna Wycena - Poproś o indywidualną wycenę!. Szybki kontakt',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://j-filipiak.pl/og-img.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/vue-slider-component.css',
    '~/assets/css/vue-slider-component-theme.css',
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: `~/plugins/smooth.client.js`, ssr: false },
    { src: `~/plugins/vue-slider.client.js`, ssr: false },
    { src: `~/plugins/toggle.client.js`, ssr: false },
    { src: `~/plugins/confetti.client.js`, ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
    {
      path: '~/utils', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
    'nuxt-gsap-module',
  ],

  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
      });
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done,
      });
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      });
    },
  },

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
