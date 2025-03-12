import {tv} from 'tailwind-variants'

export const tvInstance = tv({
	slots: {
		root: 'bg-(--color-neutral-200) rounded-sm'
	},
	variants: {
		type: {
			circle: {
				root: 'size-15 rounded-full'
			},
			image: {
				root: 'size-40 flex items-center justify-center'
			},
			h1: {
				root: 'h-6'
			},
			text: {
				root: 'h-4'
			},
			title: {
				root: 'h-5'
			}
		},
		animated: {
			true: {
				root: 'animate-pulse'
			}
		}
	}
})
