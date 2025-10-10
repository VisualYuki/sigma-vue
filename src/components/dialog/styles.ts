import {cva} from 'class-variance-authority'

export const dialogStyles = {
	root: cva(['left-1/2 top-1/2 -translate-1/2 backdrop:bg-gray-400/20 min-w-60 p-5'], {
		variants: {
			fullScreen: {
				true: 'min-w-full min-h-full'
			}
		}
	}),
	main: cva([]),
	backdrop: cva([]),
	header: cva(['flex justify-between items-center select-none mb-3']),
	content: cva(['overflow-auto max-h-[calc(100vh-150px)] min-w-60 mb-3']),
	footer: cva([''])
}
