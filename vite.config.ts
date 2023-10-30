import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import EnvironmentPlugin from 'vite-plugin-environment'

const splitDependenciesChunks = (path: string) => {
  const dependencies = path.split('/').reverse()
  const dependencyIndex = dependencies.indexOf('node_modules') - 1

  return dependencies[dependencyIndex]
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [react(), viteTsconfigPaths(), EnvironmentPlugin('all')],
    server: {
      host: 'localhost',
      port: 3000,
      open: true
    },
    build: {
      outDir: 'build',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: splitDependenciesChunks
        }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'vitest.setup.ts',
      testTimeout: 30000,
      coverage: {
        lines: 70,
        branches: 70,
        functions: 70,
        statements: 70,
        provider: 'v8',
        exclude: ['public', '**.{ts,tsx}', 'src/**/*.test.{ts,tsx}']
      }
    }
  }
})
