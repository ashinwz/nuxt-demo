// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  components: [
    { path: '~/components/layout', prefix: 'Layout' },
    '~/components'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: ['~/assets/css/main.css'],
})
