export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui'],
  content: {
    highlight: {
      theme: 'github-light',
      preload: ['js', 'ts', 'vue', 'json', 'bash', 'md']
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://kit.fontawesome.com/f6333c832d.js', defer: true, crossorigin:'anonymous' },
      ],
      htmlAttrs: {
        lang: 'cs'
      }
    }
  }
})
