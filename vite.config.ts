import {fileURLToPath, URL} from 'node:url'
import dts from 'vite-plugin-dts'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
		dts({
			insertTypesEntry: true
		}),
		tailwindcss()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'sigma-vue'
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	server: {
		port: 7949
	}
})
