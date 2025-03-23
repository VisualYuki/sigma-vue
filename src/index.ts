import type {App} from 'vue'
import {loadingDirective} from './directives/loading'
import {UiAsyncAccordion, UiAsyncAccordionItem} from './components/accordion'
import {UiAsyncButton} from './components/button'
import {UiAsyncCheckbox} from './components/checkbox'
import {ComponentNames} from './types/configuration'
import {UiAsyncAlert} from './components/alert'

const directives = {
	loading: loadingDirective
}

function install(app: App) {
	app.component(ComponentNames.Accordion, UiAsyncAccordion)
	app.component(ComponentNames.AccordionItem, UiAsyncAccordionItem)
	app.component(ComponentNames.Button, UiAsyncButton)
	app.component(ComponentNames.Checkbox, UiAsyncCheckbox)
	app.component(ComponentNames.Alert, UiAsyncAlert)

	app.directive(ComponentNames.Accordion)

	for (const prop in directives) {
		app.directive(prop, directives[prop as keyof typeof directives])
	}
}

export {install}
