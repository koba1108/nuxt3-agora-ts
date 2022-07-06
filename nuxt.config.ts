import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  ssr: false,
  target: "static",
  app: {
    baseURL: '/nuxt3-agora-ts/',
    cdnURL: 'https://koba1108.github.io/nuxt3-agora-ts/'
  }
})
