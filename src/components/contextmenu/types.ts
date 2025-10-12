export interface ContextMenuItem {
	children?: ContextMenuItem[]
	command?: () => void
	label: string
}

export interface ContextMenuProps {
	items: ContextMenuItem[]
	maxWidth?: string
}
