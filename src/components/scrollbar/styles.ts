import {cva} from 'class-variance-authority'

export const scrollbarStyles = {
	content: cva('overflow-auto h-full relative'),
	root: cva('relative')
}

export const thumbStyles = {
	root: cva('absolute bg-gray-500/50 cursor-pointer select-none rounded-md', {
		defaultVariants: {
			orientation: 'vertical'
		},
		variants: {
			hidden: {
				false: '',
				true: 'hidden'
			},
			hiddenOpacity: {
				false: '',
				true: 'opacity-0'
			},
			orientation: {
				horizontal: 'left-0 bottom-0 h-2',
				vertical: 'top-0 right-0 w-2'
			}
		}
	})
}
