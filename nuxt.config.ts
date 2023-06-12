// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["assets/css/global.css"],
  app: {
    head: {
      title: "Dojo Drum Kit",
      meta: [{ name: "Dojo Drum Kit", content: "Play Drums" }],
    },
  },
})
