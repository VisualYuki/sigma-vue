export enum ComponentNames {
	Alert = 'UiAlert',
	Icon = 'UiIcon'
}

export const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const
export type ColorType = (typeof colors)[number]
