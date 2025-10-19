import {cva} from 'class-variance-authority'

export const commonStyles = {
	root: cva(['w-max text-black **:font-medium text-base']),
	input: cva(['appearance-none block w-full border rounded-md duration-md peer focus-utility px-1.5 py-1'])
}

export const timeMenuStyles = {
	root: cva(['p-5']),
	selectedTime: cva(['mb-2 text-center font-semibold text-base text-blue-500']),
	columnsWrap: cva(['flex mb-3.5']),
	column: cva(['h-52 overflow-y-auto w-max pe-1.5']),
	columnItem: cva(['mb-1 w-7.5']),
	buttonsWrap: cva(['flex gap-3.5'])
}

export const dayMenuStyles = {
	root: cva(['p-5']),
	header: cva(['flex gap-1 justify-between items-center text-blue-500']),
	monthText: cva(['first-letter:uppercase']),
	grid: cva(['mb-3.5']),
	gridHeader: cva(['grid grid-cols-[repeat(7,30px)] gap-1 h-6 mb-2 text-center']),
	gridItems: cva(['grid grid-cols-[repeat(7,30px)] gap-1']),
	gridItem: cva([''], {
		variants: {
			isCurrentMonthDay: {
				true: '',
				false: 'text-gray-500 border border-transparent hover:border-gray-500 rounded-full'
			},
			inRange: {
				true: 'bg-gray-300',
				false: ''
			}
		}
	}),
	buttonsWrap: cva([''])
}

export const commonMenuStyles = {
	item: cva(['h-7.5 flex justify-center items-center rounded-full select-none cursor-pointer'], {
		variants: {
			isPrimary: {
				true: 'bg-blue-500 pointer-events-none text-white',
				false: ''
			}
		},
		compoundVariants: [
			{
				isPrimary: false,
				class: ['hover:bg-gray-100']
			}
		]
	})
}
