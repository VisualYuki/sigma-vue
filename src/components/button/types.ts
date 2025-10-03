import type {TSizes} from '@/types/configuration'

export type ButtonProps = {
	variant?: 'solid' | 'outline' | 'transparent'
	color?: 'primary' | 'success' | 'error' | 'warning' | 'info'
	size?: TSizes
	tag?: keyof HTMLElementTagNameMap | 'RouterLink'
	disabled?: boolean
}
