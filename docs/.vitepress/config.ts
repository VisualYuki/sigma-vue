import {whyframe} from '@whyframe/core'
import {whyframeVue} from '@whyframe/vue'
import {resolve} from 'path'
import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	//description: "A VitePress Site",
	base: '/sigma-vue/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		// nav: [
		// 	{text: 'Home', link: '/'},
		// 	{text: 'Accordion', link: '/components/Accordion'}
		// ],

		sidebar: [
			{
				items: [
					{link: '/components/accordion', text: 'Accordion'},
					{link: '/components/alert', text: 'Alert'},
					{link: '/components/button', text: 'Button'},
					{link: '/components/checkbox', text: 'Checkbox'},
					{link: '/components/collapse', text: 'Collapse'},
					{link: '/components/context-menu', text: 'ContextMenu'},
					{link: '/components/dialog', text: 'Dialog'},
					{link: '/components/label', text: 'Label'},
					{link: '/components/radio-group', text: 'RadioGroup'},
					{link: '/components/scrollbar', text: 'Scrollbar'},
					{link: '/components/skeleton', text: 'Skeleton'}
				],
				text: 'Compoenents'
			}
		],

		socialLinks: [{icon: 'github', link: 'https://github.com/VisualYuki/sigma-vue/tree/main'}]
	},
	title: 'Vue3 UI Kit',
	vite: {
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
