import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ],
  output: 'server',
  adapter: cloudflare()
})
