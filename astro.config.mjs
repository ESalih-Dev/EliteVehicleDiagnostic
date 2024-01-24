import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify/functions'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  output: 'server',
  adapter: netlify({ edgeMiddleware: true })
})
