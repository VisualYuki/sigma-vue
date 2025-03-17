export enum ComponentNames {
	Alert = 'UiAlert',
	Icon = 'UiIcon',
	Skeleton = 'UiSkeleton',
	Checkbox = 'UiCheckbox',
	Button = 'UiButton',
	Accordion = 'UiAccordion'
}

export const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const
export type TColor = (typeof colors)[number]
export type TColorTheme = {[prop in (typeof colors)[number]]: ''}

export const sizes = ['small', 'default', 'large'] as const
export type TSizes = (typeof sizes)[number]
export type TThemeSizes = {[prop in (typeof sizes)[number]]: unknown}
