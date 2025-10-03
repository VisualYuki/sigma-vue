/* eslint-disable perfectionist/sort-objects */

import {cva} from 'class-variance-authority'

export const accordionStyles = {
	root: cva(['w-full'])
}

export const accordionItemStyles = {
	root: cva(['group']),
	trigger: cva(['flex items-center grow-1 gap-1.5']),
	content: cva([]),
	label: cva(['text-start break-words']),
	trailingIcon: cva(['ms-auto shrink-0 size-4'], {
		variants: {
			active: {
				true: ['rotate-90']
			}
		}
	})
}
