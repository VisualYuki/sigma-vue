import type {Ref} from 'vue'

export type MainContext = {
	opened: Ref<boolean>
	toggleValue: () => void
}
