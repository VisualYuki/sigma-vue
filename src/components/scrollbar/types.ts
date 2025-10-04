export interface ScrollbarProps {
	height?: string
	onHover?: boolean
	thumbStyles?: string
	width?: string
	xThumbStyles?: string
	yThumbStyles?: string
}

export interface ScrollbarThumbProps {
	content?: HTMLElement | null
	direction?: 'horizontal' | 'vertical'
	onHover?: boolean
	root?: HTMLElement | null
	thumbStyles?: string
	xThumbStyles?: string
	yThumbStyles?: string
}
