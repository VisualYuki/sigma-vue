//import type {ColorType} from '@/types/configuration'
import {colors, type TColorTheme} from '@/types/configuration'
import {tv} from 'tailwind-variants'
export const alertVariants = ['solid', 'outline', 'soft', 'subtle'] as const
//type VariantType = (typeof alertVariants)[number]

export const tvInstance = tv({
	slots: {
		root: 'relative overflow-hidden w-full rounded-(--ui-radius) p-4',
		wrapper: 'flex items-center',
		content: 'flex flex-col gap-1',
		withIcon: 'me-4',
		title: 'text-sm font-medium pe-6',
		description: 'text-sm opacity-90',
		close: 'absolute top-3 right-3 cursor-pointer'
	},
	variants: {
		color: Object.fromEntries(
			colors.map((colorName) => {
				return [colorName, '']
			})
		) as TColorTheme,
		variant: {
			solid: '',
			outline: '',
			soft: '',
			subtle: ''
		} satisfies {[prop in (typeof alertVariants)[number]]: ''},
		multiline: {
			true: {
				root: 'items-start'
			},
			false: {
				root: 'items-center'
			}
		},
		center: {
			true: {
				wrapper: 'justify-center'
			}
		}
	},
	compoundVariants: [
		{
			color: 'primary',
			variant: 'solid',
			class: {
				root: 'bg-(--ui-primary) text-(--ui-text-contrast)'
			}
		},

		{
			color: 'secondary',
			variant: 'solid',
			class: {
				root: 'bg-(--ui-secondary) text-(--ui-text-contrast)'
			}
		},
		{
			color: 'success',
			variant: 'solid',
			class: {
				root: 'bg-(--ui-success) text-(--ui-text-contrast)'
			}
		},
		{
			color: 'info',
			variant: 'solid',
			class: {
				root: 'bg-(--ui-info) text-(--ui-text-contrast)'
			}
		},
		{
			color: 'warning',
			variant: 'solid',
			class: {
				root: 'bg-(--ui-warning) text-(--ui-text-contrast)'
			}
		},
		{
			color: 'error',
			variant: 'solid',
			class: {
				root: 'bg-(--ui-error) text-(--ui-text-contrast)'
			}
		},
		{
			color: 'primary',
			variant: 'outline',
			class: {
				root: 'text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25'
			}
		},
		{
			color: 'secondary',
			variant: 'outline',
			class: {
				root: 'text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25'
			}
		},
		{
			color: 'success',
			variant: 'outline',
			class: {
				root: 'text-(--ui-success) ring ring-inset ring-(--ui-success)/25'
			}
		},
		{
			color: 'info',
			variant: 'outline',
			class: {
				root: 'text-(--ui-info) ring ring-inset ring-(--ui-info)/25'
			}
		},
		{
			color: 'warning',
			variant: 'outline',
			class: {
				root: 'text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25'
			}
		},
		{
			color: 'error',
			variant: 'outline',
			class: {
				root: 'text-(--ui-error) ring ring-inset ring-(--ui-error)/25'
			}
		},
		{
			color: 'primary',
			variant: 'soft',
			class: {
				root: 'bg-(--ui-primary)/10 text-(--ui-primary)'
			}
		},
		{
			color: 'secondary',
			variant: 'soft',
			class: {
				root: 'bg-(--ui-secondary)/10 text-(--ui-secondary)'
			}
		},
		{
			color: 'success',
			variant: 'soft',
			class: {
				root: 'bg-(--ui-success)/10 text-(--ui-success)'
			}
		},
		{
			color: 'info',
			variant: 'soft',
			class: {
				root: 'bg-(--ui-info)/10 text-(--ui-info)'
			}
		},
		{
			color: 'warning',
			variant: 'soft',
			class: {
				root: 'bg-(--ui-warning)/10 text-(--ui-warning)'
			}
		},
		{
			color: 'error',
			variant: 'soft',
			class: {
				root: 'bg-(--ui-error)/10 text-(--ui-error)'
			}
		},
		{
			color: 'primary',
			variant: 'subtle',
			class: {
				root: 'bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25'
			}
		},
		{
			color: 'secondary',
			variant: 'subtle',
			class: {
				root: 'bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25'
			}
		},
		{
			color: 'success',
			variant: 'subtle',
			class: {
				root: 'bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25'
			}
		},
		{
			color: 'info',
			variant: 'subtle',
			class: {
				root: 'bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25'
			}
		},
		{
			color: 'warning',
			variant: 'subtle',
			class: {
				root: 'bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25'
			}
		},
		{
			color: 'error',
			variant: 'subtle',
			class: {
				root: 'bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25'
			}
		}
	],
	defaultVariants: {
		color: 'primary',
		variant: 'solid'
	}
})
