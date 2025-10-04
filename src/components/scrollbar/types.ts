export interface ScrollbarProps {
	height?: string
	thumbStyles?: string
	width?: string
}

export interface ScrollbarThumbProps {
	content?: HTMLElement | null
	direction?: 'horizontal' | 'vertical'
	thumbStyles?: string
}
