import {defineConfig} from 'histoire'
import {HstVue} from '@histoire/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [HstVue()],
	setupFile: './histoire.setup.ts',
	routerMode: 'hash',
	vite: {
		plugins: [tailwindcss()],
		base: '/sigma-vue/'
	}
})
