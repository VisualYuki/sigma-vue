import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
//import vueDevTools from 'vite-plugin-vue-devtools'
//import path from 'node:path'
//import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	build: {
		minify: false
		// lib: {
		// 	entry: path.resolve(__dirname, 'src/index.ts'),
		// 	name: 'sigma-vue'
		// },
		// rollupOptions: {
		// 	// make sure to externalize deps that shouldn't be bundled
		// 	// into your library
		// 	external: ['vue'],
		// 	output: {
		// 		// Provide global variables to use in the UMD build
		// 		// for externalized deps
		// 		globals: {
		// 			vue: 'Vue'
		// 		}
		// 	}
		// }
	},
	plugins: [
		vue(),
		vueJsx(),
		//vueDevTools(),
		dts({
			insertTypesEntry: true
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		port: 7949
	}
})
