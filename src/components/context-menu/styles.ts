import {cva} from 'class-variance-authority'

export const contextmenuStyles = {
	root: cva('fixed select-none z-10')
}

export const contextSubMenuStyles = {
	root: cva('max-w-max min-w-[130px] bg-white border-black border-1 rounded-sm shadow-lg', {
		variants: {
			isMainMenu: {
				true: 'relative',
				false: 'absolute'
			}
		}
	}),
	menu: cva('m-1')
}

export const contextSubMenuItemStyles = {
	root: cva(
		'relative rounded-sm px-2 py-1 hover:bg-gray-100 text-black focus:border-primary' //[&:hover>:not(ul)]:text-red-500
	),
	content: cva(['text-nowrap gap-2 flex items-center justify-between']),
	label: cva('grow text-left'),
	icon: cva('shrink-0')
}
