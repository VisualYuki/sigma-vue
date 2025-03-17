import type {Ref} from 'vue'

export const collapseSymbol = Symbol('collapseSymbol')

export type collapseRootContext = {
	opened: Ref<boolean>
	toggleValue: () => void
}
