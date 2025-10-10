export interface ObjectRadioGroupItem {
	disabled?: boolean
	label: RadioGroupValue
	value: RadioGroupValue
}

export type RadioGroupItem = ObjectRadioGroupItem | RadioGroupValue

export interface RadioGroupProps {
	direction?: 'horizontal' | 'vertical'
	disabled?: boolean
	items: RadioGroupItem[]
	legend?: string
	//name?: string
}

export type RadioGroupValue = boolean | number | string
