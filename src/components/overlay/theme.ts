import {tv} from 'tailwind-variants'

export const tvInstance = tv({
	base: 'fixed inset-0 h-full bg-(--color-neutral-100)/50',
	variants: {
		mask: {
			true: 'background-red'
		}
	}
})
