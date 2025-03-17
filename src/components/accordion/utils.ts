import type {Ref} from 'vue'

export const accordionSymbol = Symbol('accordion-symbol')

export type accordionProvideContext = {
	model: Ref<string[]>
	props: {
		accordion: boolean
		modelValue: string[]
	}
	toggle(name: string): void
}
