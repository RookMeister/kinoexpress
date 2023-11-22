// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/image',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  devtools: { enabled: true },
})
