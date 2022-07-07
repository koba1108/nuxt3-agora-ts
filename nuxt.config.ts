import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  ssr: true,
  target: "static",
  nitro: {
    output: {
      dir: 'output',
      serverDir: 'output/server',
      publicDir: 'output/public'
    }
  }
})
