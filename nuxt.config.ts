// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 600, 700, 900],
      Rubik: [100, 300, 400, 500, 600, 700, 900],
    },
    display: 'swap',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
});
