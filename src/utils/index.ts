export function isObject(value: unknown): value is object {
	return typeof value === 'object' && value !== null
}

export function toggleArrayItem(array: string[], value: string) {
	if (array.includes(value)) {
		array.splice(array.indexOf(value), 1)
	} else {
		array.push(value)
	}
}
