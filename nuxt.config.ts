// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      cookiePath: process.env.COOKIE_PATH,
    },
  },
  tailwindcss: {
    cssPath: "@/assets/scss/global.scss",
    configPath: "tailwind.config.js",
    viewer: false,
  },
});
