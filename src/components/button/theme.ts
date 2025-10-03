import {cva} from 'class-variance-authority'

/* eslint-disable perfectionist/sort-objects */

export const buttonStyles = {
	root: cva(
		[
			'rounded-md font-medium inline-flex items-center justify-around cursor-pointer select-none',
			'disabled:cursor-not-allowed disabled:opacity-75',
			'focus:outline-2 focus:outline-offset-2 focus:outline-yellow-500 h-8'
		],
		{
			variants: {
				variant: {
					solid: '',
					outline: '',
					transparent: ''
				},
				color: {
					primary: '',
					success: '',
					error: '',
					warning: '',
					info: ''
				},
				size: {
					small: 'p-1 text-sm',
					default: 'p-3 text-base',
					large: 'p-4 text-lg'
				}
			},
			compoundVariants: [
				{
					variant: 'solid',
					color: 'primary',
					class: 'bg-blue-500 text-white'
				},
				{
					variant: 'outline',
					color: 'primary',
					class: 'border border-blue-500 text-blue-500'
				},
				{
					variant: 'solid',
					color: 'error',
					class: 'bg-red-500 text-white'
				},
				{
					variant: 'outline',
					color: 'error',
					class: 'border border-red-500 text-red-500'
				},
				{
					variant: 'solid',
					color: 'warning',
					class: 'bg-yellow-500 text-white'
				},
				{
					variant: 'outline',
					color: 'warning',
					class: 'border border-yellow-500 text-yellow-500'
				},
				{
					variant: 'solid',
					color: 'info',
					class: 'bg-gray-500 text-white'
				},
				{
					variant: 'outline',
					color: 'info',
					class: 'border border-gray-500 text-gray-500'
				},
				{
					variant: 'solid',
					color: 'success',
					class: 'bg-green-500 text-white'
				},
				{
					variant: 'outline',
					color: 'success',
					class: 'border border-green-500 text-green-500'
				},
				{
					variant: 'transparent',
					color: 'primary',
					class: 'text-blue-500'
				},
				{
					variant: 'transparent',
					color: 'success',
					class: 'text-green-500'
				},
				{
					variant: 'transparent',
					color: 'error',
					class: 'text-red-500'
				},
				{
					variant: 'transparent',
					color: 'warning',
					class: 'text-yellow-500'
				},
				{
					variant: 'transparent',
					color: 'info',
					class: 'text-gray-500'
				},
				{
					variant: 'transparent',
					color: 'info',
					class: 'text-gray-500'
				}
			]
		}
	)
}
