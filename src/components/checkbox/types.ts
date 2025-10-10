export type CheckboxEmits = {
	click: [event: MouseEvent]
}

export type CheckboxModelValue = 'indeterminate' | boolean

export interface CheckboxProps {
	disabled?: boolean
	label?: string
}
