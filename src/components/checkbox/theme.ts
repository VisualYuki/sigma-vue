import {tv} from 'tailwind-variants'

export const tvInstance = tv({
	slots: {
		root: 'cursor-pointer flex justify-start items-center',
		checkbox: 'rounded-sm',
		label: 'ms-2 pb-1'
	},
	variants: {
		checked: {
			true: {
				checkbox: 'bg-(--ui-success) flex items-center justify-center'
			},
			false: {
				checkbox: 'border-solid border border-(--color-neutral-500)'
			}
		},
		size: {
			small: {
				checkbox: 'w-3.5 h-3.5',
				label: 'text-sm'
			},
			default: {
				checkbox: 'w-4 h-4',
				label: 'text-base'
			},
			large: {
				checkbox: 'w-4.5 h-4.5',
				label: 'text-lg'
			}
		},
		disabled: {
			true: {
				root: 'cursor-not-allowed opacity-50'
			}
		}
	}
})
