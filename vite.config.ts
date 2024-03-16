import { defineConfig } from 'vite'
import isConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [isConfigPaths()],
  test: {
    globals: true,
  }
})