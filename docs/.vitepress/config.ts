import {whyframe} from '@whyframe/core'
import {whyframeVue} from '@whyframe/vue'
import {resolve} from 'path'
import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	//description: "A VitePress Site",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		// nav: [
		// 	{text: 'Home', link: '/'},
		// 	{text: 'Accordion', link: '/components/Accordion'}
		// ],

		sidebar: [
			{
				items: [
					{link: '/components/Accordion', text: 'Accordion'},
					{link: '/components/Button', text: 'Button'},
					{link: '/components/Collapse', text: 'Collapse'}
					//{text: 'Dialog', link: '/components/Dialog'}
				],
				text: 'Compoenents'
			}
		],

		socialLinks: [{icon: 'github', link: 'https://github.com/VisualYuki/sigma-vue/tree/main'}]
	},
	title: 'Vue3 UI Kit',
	vite: {
		base: '/sigma-vue/',
		plugins: [
			// Initialize core plugin
			whyframe({
				defaultSrc: '/frames/default' // provide our own html
			}),

			// Initialize Vue integration plugin
			whyframeVue({
				include: /\.(?:vue|md)$/ // also scan in markdown files
			})
		],
		resolve: {
			alias: {
				'@': resolve('src'),
				'@docs': resolve('docs')
			}
		}
	}
})
