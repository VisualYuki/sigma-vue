import type {ColorType} from '@/types/configuration'
export const alertVariants = ['solid', 'outline', 'soft', 'subtle'] as const
type VariantType = (typeof alertVariants)[number]

export default {
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
		color: {
			primary: '',
			secondary: '',
			success: '',
			info: '',
			warning: '',
			error: ''
		},
		variant: {
			solid: '',
			outline: '',
			soft: '',
			subtle: ''
		},
		multiline: {
			true: {
				root: 'items-start',
				actions: 'items-start mt-1'
			},
			false: {
				root: 'items-center',
				actions: 'items-center'
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
			color: 'primary' as ColorType,
			variant: 'solid' as VariantType,
			class: {
				root: 'bg-[var(--ui-primary)] text-[var(--ui-bg)]'
			}
		},
		{
			color: 'secondary' as ColorType,
			variant: 'solid' as VariantType,
			class: {
				root: 'bg-[var(--ui-secondary)] text-[var(--ui-bg)]'
			}
		},
		{
			color: 'success' as ColorType,
			variant: 'solid' as VariantType,
			class: {
				root: 'bg-[var(--ui-success)] text-[var(--ui-bg)]'
			}
		},
		{
			color: 'info' as ColorType,
			variant: 'solid' as VariantType,
			class: {
				root: 'bg-[var(--ui-info)] text-[var(--ui-bg)]'
			}
		},
		{
			color: 'warning' as ColorType,
			variant: 'solid' as VariantType,
			class: {
				root: 'bg-[var(--ui-warning)] text-[var(--ui-bg)]'
			}
		},
		{
			color: 'error' as ColorType,
			variant: 'solid' as VariantType,
			class: {
				root: 'bg-[var(--ui-error)] text-[var(--ui-bg)]'
			}
		},
		{
			color: 'primary' as ColorType,
			variant: 'outline' as VariantType,
			class: {
				root: 'text-[var(--ui-primary)] ring ring-inset ring-[var(--ui-primary)]/25'
			}
		},
		{
			color: 'secondary' as ColorType,
			variant: 'outline' as VariantType,
			class: {
				root: 'text-[var(--ui-secondary)] ring ring-inset ring-[var(--ui-secondary)]/25'
			}
		},
		{
			color: 'success' as ColorType,
			variant: 'outline' as VariantType,
			class: {
				root: 'text-[var(--ui-success)] ring ring-inset ring-[var(--ui-success)]/25'
			}
		},
		{
			color: 'info' as ColorType,
			variant: 'outline' as VariantType,
			class: {
				root: 'text-[var(--ui-info)] ring ring-inset ring-[var(--ui-info)]/25'
			}
		},
		{
			color: 'warning' as ColorType,
			variant: 'outline' as VariantType,
			class: {
				root: 'text-[var(--ui-warning)] ring ring-inset ring-[var(--ui-warning)]/25'
			}
		},
		{
			color: 'error' as ColorType,
			variant: 'outline' as VariantType,
			class: {
				root: 'text-[var(--ui-error)] ring ring-inset ring-[var(--ui-error)]/25'
			}
		},
		{
			color: 'primary' as ColorType,
			variant: 'soft' as VariantType,
			class: {
				root: 'bg-[var(--ui-primary)]/10 text-[var(--ui-primary)]'
			}
		},
		{
			color: 'secondary' as ColorType,
			variant: 'soft' as VariantType,
			class: {
				root: 'bg-[var(--ui-secondary)]/10 text-[var(--ui-secondary)]'
			}
		},
		{
			color: 'success' as ColorType,
			variant: 'soft' as VariantType,
			class: {
				root: 'bg-[var(--ui-success)]/10 text-[var(--ui-success)]'
			}
		},
		{
			color: 'info' as ColorType,
			variant: 'soft' as VariantType,
			class: {
				root: 'bg-[var(--ui-info)]/10 text-[var(--ui-info)]'
			}
		},
		{
			color: 'warning' as ColorType,
			variant: 'soft' as VariantType,
			class: {
				root: 'bg-[var(--ui-warning)]/10 text-[var(--ui-warning)]'
			}
		},
		{
			color: 'error' as ColorType,
			variant: 'soft' as VariantType,
			class: {
				root: 'bg-[var(--ui-error)]/10 text-[var(--ui-error)]'
			}
		},
		{
			color: 'primary' as ColorType,
			variant: 'subtle' as VariantType,
			class: {
				root: 'bg-[var(--ui-primary)]/10 text-[var(--ui-primary)] ring ring-inset ring-[var(--ui-primary)]/25'
			}
		},
		{
			color: 'secondary' as ColorType,
			variant: 'subtle' as VariantType,
			class: {
				root: 'bg-[var(--ui-secondary)]/10 text-[var(--ui-secondary)] ring ring-inset ring-[var(--ui-secondary)]/25'
			}
		},
		{
			color: 'success' as ColorType,
			variant: 'subtle' as VariantType,
			class: {
				root: 'bg-[var(--ui-success)]/10 text-[var(--ui-success)] ring ring-inset ring-[var(--ui-success)]/25'
			}
		},
		{
			color: 'info' as ColorType,
			variant: 'subtle' as VariantType,
			class: {
				root: 'bg-[var(--ui-info)]/10 text-[var(--ui-info)] ring ring-inset ring-[var(--ui-info)]/25'
			}
		},
		{
			color: 'warning' as ColorType,
			variant: 'subtle' as VariantType,
			class: {
				root: 'bg-[var(--ui-warning)]/10 text-[var(--ui-warning)] ring ring-inset ring-[var(--ui-warning)]/25'
			}
		},
		{
			color: 'error' as ColorType,
			variant: 'subtle' as VariantType,
			class: {
				root: 'bg-[var(--ui-error)]/10 text-[var(--ui-error)] ring ring-inset ring-[var(--ui-error)]/25'
			}
		}
	],
	defaultVariants: {
		color: 'primary' as ColorType,
		variant: 'solid' as VariantType
	}
}
