// https://v3.nuxtjs.org/api/configuration/nuxt.config
import './dotenv.config.js';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
    },
    private: {
      openaiAuthToken: process.env.OPENAI_AUTH_TOKEN
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
  ],
  devtools: {
    enabled: true
  },
  
})
