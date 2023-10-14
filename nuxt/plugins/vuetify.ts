import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify, ThemeDefinition } from 'vuetify'

async function loadFonts () {
  if (process.client) {
    const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

    webFontLoader.load({
      google: {
        families: ['Roboto:100,300,400,500,700,900&display=swap'],
      },
    })
  }
}

const ellipsisLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#6F5DCC',
    blackSub: '#110E1F',
    whiteSub: '#F1EFFA',
    accent: '#9E95CD',
    secondary: '#DAD5F2',
  }
}

const ellipsisDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#6659FF',
    secondary: '#040849',
    accent: '#00D1BE',
    info: '#292C64',
    error: '#FF5252',
    success: '#8782F8',
    warning: '#FF9907',
    ellipsis: '#6659FF',
    elGrey_1: '#43588F',
    elGrey_2: '#8EA6C1',
    elGrey_3: '#E4E7FA',
    elGrey_4: '#B2C6DD',
    white: '#ffffff'
  }
}

export default defineNuxtPlugin(nuxtApp => {
  loadFonts()
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: ellipsisLightTheme,
        dark: ellipsisDarkTheme
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
  return {
    provide: {
      vuetify
    }
  }
})