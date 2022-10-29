import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import react from '@astrojs/react'

// https://astro.build/config
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
  integrations: [mdx(), sitemap(), vue(), react()],
  vite: {
    ssr: {
      noExternal: ['@codesandbox/sandpack-react', '@codesandbox/sandpack-client'],
    },
  },
})
