import {cva} from 'class-variance-authority'

export const accordionStyles = {
	root: cva(['w-full'])
}

export const accordionItemStyles = {
	root: cva(['group']),
	trigger: cva(['flex items-center grow-1 gap-1.5']),
	content: cva([]),
	label: cva(['text-start break-words']),
	trailingIcon: cva(['ms-auto shrink-0 size-4 transition-transform duration-200 ' + String.raw`group-[.ui-accordion-item\_active]:rotate-90`])
}

// 	disabled: {
// 			true: {
// 				trigger: 'cursor-not-allowed opacity-75'
// 			}
// 		}

// export const accordionItemStyles = cva({
// 	slots: {
// 		item: 'group border-b border-(--ui-border) last:border-b-0',
// 		trigger: 'flex grow-1 flex items-center gap-1.5 font-medium text-sm py-3.5 cursor-pointer',
// 		content: '',
// 		body: 'text-sm pb-3.5',
// 		leadingIcon: 'shrink-0 size-5',
// 		trailingIcon: 'ms-auto shrink-0 size-4 transition-transform duration-200 ' + String.raw`group-[.ui-accordion-item\_active]:rotate-90`,
// 		label: 'text-start break-words'
// 	},
// 	variants: {
// 		disabled: {
// 			true: {
// 				trigger: 'cursor-not-allowed opacity-75'
// 			}
// 		}
// 	}
// })
