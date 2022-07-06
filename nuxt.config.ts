import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  app: {
    cdnURL: '/nuxt3-agora-ts/'
  }
})
