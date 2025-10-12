import {useWindowSize} from '@vueuse/core'

export function getViewport(): {height: number; width: number} {
	return {
		height: useWindowSize({includeScrollbar: false}).height.value,
		width: useWindowSize({includeScrollbar: false}).width.value
	}
}

export interface BaseItem {
	label: string
	children?: BaseItem[]
}

export function filterItems<T extends BaseItem>(arr: T[], search: string): T[] {
	return arr.reduce((acc, item) => {
		const match = item['label'].toLowerCase().includes(search.toLowerCase())

		if (item['children'] && item['children'].length > 0) {
			const filteredChildren = filterItems(item['children'], search)

			if (filteredChildren && filteredChildren.length > 0) {
				acc.push({
					...item,
					children: filteredChildren
				})
			}
		} else if (match) {
			acc.push({
				...item,
				children: []
			})
		}

		return acc
	}, [] as T[])
}
