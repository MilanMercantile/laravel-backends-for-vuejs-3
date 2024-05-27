// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
      "vuetify-nuxt-module",
      "nuxt-auth-sanctum"
  ],
    sanctum: {
        baseUrl: process.env.API_BASE_URL, // Laravel API
        userStateKey: 'sanctum.user.identity',
        redirectIfAuthenticated: false,
        endpoints: {
            csrf: '/sanctum/csrf-cookie',
            login: '/api/login',
            logout: '/api/logout',
            user: '/api/user',
        },
        csrf: {
            cookie: 'XSRF-TOKEN',
            header: 'X-XSRF-TOKEN',
        },
        client: {
            retry: false,
        },
        logLevel: 3
    },
})