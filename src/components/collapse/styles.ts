import {cva} from 'class-variance-authority'

export const collapseStyles = {
	root: cva('select-none', {
		variants: {
			disabled: {
				true: ['cursor-not-allowed opacity-50']
			}
		}
	})
}

export const collapseTriggerStyles = {
	root: cva('focus-utility', {
		variants: {
			disabled: {
				false: 'cursor-pointer'
			}
		}
	})
}

export const collapseContentStyles = {
	root: cva('transition-collapse-target'),
	inner: cva('')
}
