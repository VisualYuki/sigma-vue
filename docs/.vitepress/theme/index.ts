import DefaultTheme from 'vitepress/theme'
import {h} from 'vue'

import {Accordion, AccordionItem} from '@/components/accordion'
import {Button} from '@/components/button'
import {CollapseContent, CollapseRoot, CollapseTrigger} from '@/components/collapse'
import {Dialog} from '@/components/dialog'
import {Scrollbar} from '@/components/scrollbar'

import './styles.css'

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
		app.component('UiScrollbar', Scrollbar)
	},
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		})
	}
}
