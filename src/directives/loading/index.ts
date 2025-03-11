import {createApp, defineComponent, h, type App, type ComponentPublicInstance, type Directive, type DirectiveBinding} from 'vue'
import Loading from './loading.vue'

interface loadingOptions {
	value: boolean
	text?: string
}

type loadingModifiers = 'fullscreen'

const loadingSymbol: unique symbol = Symbol('loading-directive')

interface LoadingElement extends HTMLElement {
	[loadingSymbol]?: {
		app: App<Element>
		mountedApp: ComponentPublicInstance
	}
}

function createInstance(el: LoadingElement, binding: DirectiveBinding<loadingOptions, loadingModifiers>) {
	//const visible = ref(false)

	const app = createApp(
		defineComponent({
			setup() {
				return () => h(Loading, {loadingText: binding.value.text})
			},
			// data() {
			// 	return {
			// 		visible: visible
			// 	}
			// },
			methods: {
				test() {}
			}
		})
	)

	return [app, app.mount(document.createElement('div'))] as const
}

function processDirective(el: LoadingElement, binding: DirectiveBinding<loadingOptions, loadingModifiers>) {
	let app, mountedApp

	if (binding.value !== binding.oldValue) {
		if (binding.value.value) {
			el[loadingSymbol]?.app?.unmount()
			;[app, mountedApp] = createInstance(el, binding)

			if (binding.modifiers.fullscreen) {
				document.body.appendChild(mountedApp.$el)
			} else {
				el.appendChild(mountedApp.$el)
			}

			el[loadingSymbol] = {app, mountedApp}
		} else {
			el[loadingSymbol]?.app?.unmount()
		}
	}
}

export const loadingDirective: Directive<LoadingElement, loadingOptions> = {
	mounted(el: LoadingElement, binding: DirectiveBinding<loadingOptions>) {
		el.classList.add('relative')
		processDirective(el, binding)
	},
	updated(el: LoadingElement, binding: DirectiveBinding<loadingOptions>) {
		processDirective(el, binding)
	},
	beforeUnmount(el: LoadingElement) {
		el.classList.remove('relative')
	}
}
