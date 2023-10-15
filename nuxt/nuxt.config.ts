// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
    },
    private: {
    }
  },
  components: {
    dirs: [
      {
        path: "components",
        global: true
      }
    ]
  },
  dir: {
    plugins: "plugins",
    public: "public"
  },
  imports: {
    dirs: ["composables"],
    global: true
  },
  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/scss/materialdesignicons.scss'
  ],

  build: {
    transpile: ['vuetify']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/axios',
  ],
  devtools: {
    enabled: true
  }
})
