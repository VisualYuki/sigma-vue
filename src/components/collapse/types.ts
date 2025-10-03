import type {ComputedRef, Ref} from 'vue'

export type MainContext = {
	disabled: ComputedRef<boolean>
	opened: Ref<boolean>
	toggleValue: () => void
}
