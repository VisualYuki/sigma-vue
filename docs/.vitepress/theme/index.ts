import DefaultTheme from 'vitepress/theme'
import {h} from 'vue'

import {Accordion, AccordionItem} from '@/components/accordion'
import {Button} from '@/components/button'
import {CollapseContent, CollapseRoot, CollapseTrigger} from '@/components/collapse'

import './styles.css'
import {Dialog} from '@/components/dialog'

export default {
	...DefaultTheme,
	enhanceApp({app}: {app: import('vue').App}) {
		app.component('UiAccordion', Accordion)
		app.component('UiAccordionItem', AccordionItem)
		app.component('UiCollapseRoot', CollapseRoot)
		app.component('UiCollapseContent', CollapseContent)
		app.component('UiCollapseTrigger', CollapseTrigger)
		app.component('UiDialog', Dialog)
		app.component('UiButton', Button)
	},
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		})
	}
}
