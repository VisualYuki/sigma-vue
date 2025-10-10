import DefaultTheme from 'vitepress/theme'
import {h} from 'vue'

import {Accordion, AccordionItem} from '@/components/accordion'
import {Alert} from '@/components/alert'
import {Button} from '@/components/button'
import {Checkbox} from '@/components/checkbox'
import {CollapseContent, CollapseRoot, CollapseTrigger} from '@/components/collapse'
import {Dialog} from '@/components/dialog'
import {RadioGroup} from '@/components/radio-group'
import {Scrollbar} from '@/components/scrollbar'

import './styles.css'

export default {
	...DefaultTheme,
	enhanceApp({app}: {app: import('vue').App}) {
		app.component('UiAccordion', Accordion)
		app.component('UiAlert', Alert)
		app.component('UiAccordionItem', AccordionItem)
		app.component('UiCheckbox', Checkbox)
		app.component('UiCollapseRoot', CollapseRoot)
		app.component('UiCollapseContent', CollapseContent)
		app.component('UiCollapseTrigger', CollapseTrigger)
		app.component('UiDialog', Dialog)
		app.component('UiButton', Button)
		app.component('UiRadioGroup', RadioGroup)
		app.component('UiScrollbar', Scrollbar)
	},
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		})
	}
}
