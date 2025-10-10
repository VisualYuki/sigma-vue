import {cva} from 'class-variance-authority'

export const accordionStyles = {
	root: cva(['w-full'])
}

export const accordionItemStyles = {
	root: cva(['group text-white']),
	trigger: cva(['p-2 bg-red-500']),
	triggerInner: cva(['flex items-center grow-1 gap-1.5']),
	content: cva([' bg-blue-500 p-2']),
	label: cva(['text-start break-words']),
	trailingIcon: cva(['ms-auto shrink-0 size-4 text-white'], {
		variants: {
			active: {
				true: ['rotate-90']
			}
		}
	})
}
