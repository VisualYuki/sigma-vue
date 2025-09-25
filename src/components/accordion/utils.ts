import type {Ref} from 'vue'

export const mainContextKey = Symbol('accordion-symbol')

export type MainContext = {
	modelValue: Ref<string[]>
	toggle(name: string): void
}

export interface AccordionProps {
	accordion?: boolean
}

export interface AccordionItemProps {
	name: string
}
