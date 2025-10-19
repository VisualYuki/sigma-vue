import {cva} from 'class-variance-authority'

export const buttonStyles = {
	root: cva(['rounded-md font-medium inline-flex items-center justify-around cursor-pointer select-none', 'disabled-utility h-8 focus-utility'], {
		compoundVariants: [
			{
				class: 'bg-blue-500 text-white',
				color: 'primary',
				variant: 'solid'
			},
			{
				class: 'border border-blue-500 text-blue-500',
				color: 'primary',
				variant: 'outline'
			},
			{
				class: 'text-blue-500',
				color: 'primary',
				variant: 'transparent'
			},
			{
				class: 'bg-red-500 text-white',
				color: 'error',
				variant: 'solid'
			},
			{
				class: 'border border-red-500 text-red-500',
				color: 'error',
				variant: 'outline'
			},
			{
				class: 'text-red-500',
				color: 'error',
				variant: 'transparent'
			},
			{
				class: 'bg-yellow-500 text-white',
				color: 'warning',
				variant: 'solid'
			},
			{
				class: 'border border-yellow-500 text-yellow-500',
				color: 'warning',
				variant: 'outline'
			},
			{
				class: 'text-yellow-500',
				color: 'warning',
				variant: 'transparent'
			},
			{
				class: 'bg-gray-500 text-white',
				color: 'info',
				variant: 'solid'
			},
			{
				class: 'border border-gray-500 text-gray-500',
				color: 'info',
				variant: 'outline'
			},
			{
				class: 'text-gray-500',
				color: 'info',
				variant: 'transparent'
			},
			{
				class: 'text-gray-500',
				color: 'info',
				variant: 'transparent'
			},
			{
				class: 'bg-green-500 text-white',
				color: 'success',
				variant: 'solid'
			},
			{
				class: 'border border-green-500 text-green-500',
				color: 'success',
				variant: 'outline'
			},

			{
				class: 'text-green-500',
				color: 'success',
				variant: 'transparent'
			},
			{
				class: 'text-black',
				color: 'black',
				variant: 'transparent'
			},
			{
				class: 'text-white bg-black',
				color: 'black',
				variant: 'solid'
			},
			{
				class: 'text-black border border-black',
				color: 'black',
				variant: 'outline'
			}
		],
		variants: {
			color: {
				error: '',
				info: '',
				primary: '',
				success: '',
				warning: '',
				black: ''
			},
			size: {
				default: 'p-3 text-base',
				large: 'p-4 text-lg',
				small: 'p-1 text-sm'
			},
			variant: {
				outline: '',
				solid: '',
				transparent: ''
			}
		}
	})
}
