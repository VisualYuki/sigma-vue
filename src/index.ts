import type {App} from 'vue'
//import {INSTALLED_KEY} from './constants/key'
//import Icon from './components'
//import {UiAlert} from './components/alert'
import {loadingDirective} from './directives/loading'

//const components = [UiAlert]
const directives = {
	loading: loadingDirective
}

function install(app: App) {
	// if (app[INSTALLED_KEY]) {
	// 	return
	// } else {
	// 	app[INSTALLED_KEY] = true
	// }

	//components.forEach((c) => app.component(c.name, c))

	for (const prop in directives) {
		app.directive(prop, directives[prop as keyof typeof directives])
	}
}

export {install}
