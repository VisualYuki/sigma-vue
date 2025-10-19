import {cva} from 'class-variance-authority'

export const radioStyles = {
	root: cva('flex items-center select-none group leading-none flex-wrap disabled-utility cursor-pointer'),
	originalInput: cva('sr-only peer'),
	fakeInput: cva(['relative w-4 h-4 rounded-full border-2 focus-utility'], {
		variants: {
			checked: {
				false: 'border-black',
				true: 'border-green-500'
			}
		}
	}),
	icon: cva('absolute top-[50%] left-[50%] translate-[-50%] w-1.5 h-1.5 rounded-full bg-green-500'),
	label: cva('ms-1.5')
}

export const radioGroupStyles = {
	legend: cva('px-2 text-xs'),
	root: cva('inline-flex gap-3 p-4 pe-12 relative border border-black rounded-md', {
		defaultVariants: {
			direction: 'horizontal'
		},
		variants: {
			direction: {
				vertical: 'flex-col',
				horizontal: 'flex-row'
			}
		}
	})
}
