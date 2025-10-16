import {cva} from 'class-variance-authority'

export const skeletonStyles = {
	root: cva('bg-stone-100 rounded-sm', {
		variants: {
			type: {
				circle: 'size-15 rounded-full!',
				image: 'size-40 flex items-center justify-center',
				h1: 'h-6',
				text: 'h-4',
				title: 'h-5'
			},
			animated: {
				true: 'animate-pulse'
			}
		}
	})
}
