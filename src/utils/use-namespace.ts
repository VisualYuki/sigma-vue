const namespace = 'ui'
const conditionPrefix = 'is'

/**
 * @example
 * bem("block", "element", "modifier", true) => .block__element_modifier
 * bem("block", "element", "modifier", false) => block__element_modifier
 * bem("block", "element", "", true) => .block__element
 * bem("block", "", "", true) => .block
 * bem("block", "", "", false) => block
 */
function bem(block: string, element?: string, modifier?: string, isSelector: boolean = false) {
	return `${isSelector ? '.' : ''}` + `${namespace}-${block}` + `${element ? '__' + element : ''}` + `${modifier ? '_' + modifier : ''}`
}

export function useNamespace(blockName: string, isSelector: boolean = false) {
	function is(name: string, condition: boolean = true) {
		return condition ? `${isSelector ? '.' : ''}` + conditionPrefix + '-' + name : ''
	}

	function m(modifier: string) {
		return modifier ? bem(blockName, '', modifier, isSelector) : ''
	}

	function e(element: string) {
		return element ? bem(blockName, element, '', isSelector) : ''
	}

	function em(element: string, modifier: string) {
		return bem(blockName, element, modifier, isSelector)
	}

	function b() {
		return bem(blockName, '', '', isSelector)
	}

	return {
		is,
		bem,
		m,
		b,
		e,
		em
	}
}
