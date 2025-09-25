import type {Ref} from 'vue'

export const MainContextKey = Symbol('MainContextKey')

export type MainContext = {
	opened: Ref<boolean>
	toggleValue: () => void
}
