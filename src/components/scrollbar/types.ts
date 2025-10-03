export interface ScrollbarProps {
	height?: string
	onHover?: boolean
	thumbStyles?: string
	width?: string
}

export interface ScrollbarThumbProps {
	content?: HTMLElement | null
	direction?: 'horizontal' | 'vertical'
	onHover?: boolean
	thumbStyles?: string
}
