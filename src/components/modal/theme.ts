import {tv} from 'tailwind-variants'

export const tvInstance = tv({
	slots: {
		base: 'relative p-4 bg-white  box-border mt-[15vh] ml-auto mr-auto mb-0 rounded-(--ui-radius)',
		header: 'flex items-center mb-5',
		headerSlot: 'grow-1'
	},
	variants: {
		size: {
			small: 'max-w-[300px]',
			default: 'max-w-[500px]',
			large: 'max-w-[800px]'
		},
		center: {
			true: 'top-[50%] m-auto transform-[translateY(-50%)]'
		},
		fullscreen: {
			true: 'h-full max-w-full mt-0 rounded-(--ui-radius)'
		}
	}
})
