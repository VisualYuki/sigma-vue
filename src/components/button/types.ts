import type {TSizes} from '@/types/configuration'

export type ButtonProps = {
	color?: 'error' | 'info' | 'primary' | 'success' | 'warning' | 'black'
	disabled?: boolean
	size?: TSizes
	tag?: 'RouterLink' | keyof HTMLElementTagNameMap
	variant?: 'outline' | 'solid' | 'transparent'
}
