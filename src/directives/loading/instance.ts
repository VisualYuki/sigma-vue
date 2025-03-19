import {createApp, defineComponent, h, unref} from 'vue'
import Loading from './component.vue'
import type {ResolvedLoadingOptions} from './utils'

export function createInstance(options: ResolvedLoadingOptions) {
	const app = createApp(
		defineComponent({
			setup() {
				return () => h(Loading, {text: unref(options.text), background: unref(options.background), customClass: unref(options.customClass)})
			}
		})
	)

	const vm = app.mount(document.createElement('div'))

	return {
		vm,
		app,
		get el() {
			return vm.$el
		}
	}
}
