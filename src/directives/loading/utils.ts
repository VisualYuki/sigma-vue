import type {MaybeRef} from 'vue'

export type ResolvedLoadingOptions = {
	target: HTMLElement
	text: MaybeRef<string>
	isFullscreen: boolean
	isLock: boolean
	background: MaybeRef<string>

	customClass: MaybeRef<string>
}

export type LoadingOptions = Partial<ResolvedLoadingOptions>

export type LoadingOptionKeys = keyof ResolvedLoadingOptions

export type DirectiveModifiers = 'fullscreen' | 'lock'

export const loadingSymbol: unique symbol = Symbol('loading-directive')
