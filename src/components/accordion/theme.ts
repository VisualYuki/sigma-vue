import {tv} from 'tailwind-variants'

export const tvInstance = tv({
	slots: {
		root: 'w-full',
		item: 'group border-b border-(--ui-border) last:border-b-0',
		trigger: 'flex grow-1 flex items-center gap-1.5 font-medium text-sm py-3.5 cursor-pointer',
		content: '',
		body: 'text-sm pb-3.5',
		leadingIcon: 'shrink-0 size-5',
		trailingIcon: 'ms-auto shrink-0 size-4 transition-transform duration-200 ' + String.raw`group-[.ui-accordion-item\_active]:rotate-90`,
		label: 'text-start break-words'
	},
	variants: {
		disabled: {
			true: {
				trigger: 'cursor-not-allowed opacity-75'
			}
		}
	}
})
