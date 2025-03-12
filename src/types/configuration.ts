export enum ComponentNames {
	Alert = 'UiAlert',
	Icon = 'UiIcon',
	Skeleton = 'UiSkeleton'
}

export const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const
export type ColorType = (typeof colors)[number]
