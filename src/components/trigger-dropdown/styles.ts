import {cva} from 'class-variance-authority'

export const dropdownStyles = {
	root: cva(['relative']),
	trigger: cva(['']),
	content: cva(['absolute z-10 left-0', 'overflow-y-auto mt-0.5 shadow-lg', 'rounded-md bg-white'], {
		variants: {
			width: {
				full: 'w-full',
				max: 'w-max'
			},
			height: {
				static: 'max-h-52',
				max: 'h-max'
			},
			isOffset: {
				true: 'bottom-full',
				false: 'top-full'
			}
		}
	})
}
