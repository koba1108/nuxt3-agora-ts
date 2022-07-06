import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  app: {
    cdnURL: 'https://koba1108.github.io/nuxt3-agora-ts'
  }
})
