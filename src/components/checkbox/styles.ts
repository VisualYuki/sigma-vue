import {cva} from 'class-variance-authority'

export const checkboxStyles = {
	root: cva('inline-flex items-center cursor-pointer disabled-utility'),
	fakeInput: cva(['relative w-4 h-4 border-2 rounded-sm flex-shrink-0 focus-utility '], {
		defaultVariants: {
			checked: false
		},
		variants: {
			checked: {
				false: 'border-stone-500',
				true: 'bg-green-500 border-green-500'
			}
		}
	}),
	icon: cva(['absolute top-[50%] left-[50%] translate-[-50%]'], {
		variants: {
			isCheckedIcon: {
				false: '',
				true: 'text-white'
			},
			isMinusIcon: {
				false: '',
				true: 'text-stone-500'
			}
		}
	}),
	originalInput: cva(['sr-only peer']),
	label: cva('ms-1.5')
}
