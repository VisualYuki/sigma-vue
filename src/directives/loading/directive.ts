import {type Directive, type DirectiveBinding, type MaybeRef} from 'vue'
import {type DirectiveModifiers, type LoadingOptionKeys, type ResolvedLoadingOptions} from './utils'
import {loadingPlugin} from './plugin'

type DirectiveValue = MaybeRef<boolean>

function resolveOptions(el: HTMLElement, binding: DirectiveBinding<DirectiveValue, Partial<DirectiveModifiers>>): ResolvedLoadingOptions {
	function getAttribute(attr: LoadingOptionKeys) {
		return el.getAttribute('ui-' + attr)
	}

	return {
		target: el,
		background: getAttribute('background') || '',
		//@ts-ignore
		customClass: getAttribute('custom-class') || '',
		isFullscreen: binding.modifiers.fullscreen || false,
		isLock: binding.modifiers.lock || false,
		text: getAttribute('text') || ''
	}
}

let pluginInstance: ReturnType<typeof loadingPlugin>
let options: ResolvedLoadingOptions

export const loadingDirective: Directive<HTMLElement, DirectiveValue, Partial<DirectiveModifiers>> = {
	mounted(el, binding) {
		options = resolveOptions(el, binding)

		options.target.classList.add('relative')

		if (binding.value) {
			pluginInstance = loadingPlugin(options)
		}
	},
	updated(el, binding) {
		if (binding.value !== binding.oldValue) {
			if (binding.value) {
				options = resolveOptions(el, binding)
				pluginInstance = loadingPlugin(options)
			} else {
				pluginInstance.close()
			}
		}
	},
	beforeUnmount() {
		options.target.classList.remove('relative')
		pluginInstance.close()
	}
}
