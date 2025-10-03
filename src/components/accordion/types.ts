import type {Ref} from 'vue'

export interface AccordionItemProps {
	_disabled?: string
	disabled?: boolean
	name: string
}

export interface AccordionProps {
	multiply?: boolean
}

export type MainContext = {
	modelValue: Ref<string[]>
	toggle(name: string): void
}
