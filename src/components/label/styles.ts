import {cva} from 'class-variance-authority'

export const labelStyles = {
	root: cva([''], {
		variants: {
			dark: {
				true: null,
				false: null
			},
			size: {
				sm: 'text-sm',
				md: 'text-md',
				lg: 'text-lg'
			},
			weight: {
				normal: 'font-normal',
				medium: 'font-medium',
				bold: 'font-bold'
			},
			color: {
				black: 'text-black',
				white: 'text-white',
				error: 'text-red-500',
				primary: 'text-blue-500',
				success: 'text-green-500',
				warning: 'text-yellow-500',
				info: 'text-gray-500'
			},
			truncate: {
				true: 'truncate',
				false: ''
			}
		},
		compoundVariants: [
			{
				class: 'dark:text-white',
				color: 'black',
				dark: true
			},
			{
				class: 'dark:text-black',
				color: 'white',
				dark: true
			}
		]
	})
}
