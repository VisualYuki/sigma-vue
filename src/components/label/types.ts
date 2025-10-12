export interface LabelProps {
	as?: keyof HTMLElementTagNameMap
	color?: 'black' | 'white'
	dark?: boolean
	size?: 'lg' | 'md' | 'sm'
	weight?: 'bold' | 'medium' | 'normal'
	truncate?: string
}
