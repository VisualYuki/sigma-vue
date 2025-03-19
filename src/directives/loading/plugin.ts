import {createInstance} from './instance'
import {type LoadingOptions, type ResolvedLoadingOptions} from './utils'

function resolveOptions(options: LoadingOptions): ResolvedLoadingOptions {
	return {
		target: options.target || document.body,
		isFullscreen: options.isFullscreen || false,
		isLock: options.isLock || false,
		text: options.text || '',
		background: options.background || '',
		customClass: options.customClass || ''
	}
}

export function loadingPlugin(options: LoadingOptions) {
	const resolvedOptions = resolveOptions(options)

	const {el, vm, app} = createInstance(resolvedOptions)

	function fullscreen() {
		if (resolvedOptions.isFullscreen) {
			document.body.appendChild(el)
		} else {
			resolvedOptions.target.appendChild(el)
		}
	}

	function lock() {
		if (resolvedOptions.isFullscreen && resolvedOptions.isLock) {
			document.body.classList.add('overflow-hidden', 'position-relative')
		}
	}

	fullscreen()

	lock()

	return {
		vm,
		el,
		close: () => {
			app.unmount()
		}
	}
}
