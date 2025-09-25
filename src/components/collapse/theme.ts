import {cva} from 'class-variance-authority'

export const collapseStyles = {
	root: cva('select-none')
}

export const collapseContentStyles = {
	root: cva('transition-collapse-target border border-red-300'),
	inner: cva('p-2')
}

export const collapseTriggerStyles = {
	root: cva('p-2 border border-gray-300 cursor-pointer')
}
