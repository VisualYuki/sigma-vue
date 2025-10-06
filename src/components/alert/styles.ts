/* eslint-disable perfectionist/sort-objects */

import {cva} from 'class-variance-authority'

export const alertStyles = {
	root: cva('relative overflow-hidden w-full rounded-md p-4 disabled', {
		variants: {
			color: {
				error: '',
				info: '',
				primary: '',
				success: '',
				warning: ''
			},
			variant: {
				solid: '',
				transparent: ''
			}
		},
		compoundVariants: [
			{
				class: 'bg-red-500 text-white',
				color: 'error',
				variant: 'solid'
			},
			{
				class: 'border border-red-500 text-red-500',
				color: 'error',
				variant: 'transparent'
			},
			{
				class: 'bg-blue-500 text-white',
				color: 'primary',
				variant: 'solid'
			},
			{
				class: 'border border-blue-500 text-blue-500',
				color: 'primary',
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
				variant: 'transparent'
			}
		]
	}),
	wrapper: cva('flex items-center'),
	close: cva('absolute top-3 right-3 cursor-pointer'),
	content: cva('flex flex-col gap-1'),
	title: cva('text-base font-medium pe-6'),
	description: cva('text-sm opacity-90')
}
