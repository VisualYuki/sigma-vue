import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'

import {Primitive} from '.'

describe('Primitive', () => {
	it('render default div element', () => {
		const wrapper = mount(Primitive, {})

		expect((wrapper.element as HTMLElement).nodeName).toBe('DIV')
	})

	it('render button tag', () => {
		const wrapper = mount(Primitive, {
			props: {
				as: 'button'
			}
		})

		expect((wrapper.element as HTMLElement).nodeName).toBe('BUTTON')
	})

	it('selfclosing tags', () => {
		const wrapper = mount(Primitive, {props: {as: 'input'}, slots: {default: 'default-slot'}})

		expect((wrapper.element as HTMLDivElement).innerHTML).toBe('')
	})

	// it('as child', () => {
	// 	const wrapper = mount(Primitive, {
	// 		props: {
	// 			prop: 'prop',
	// 			asChild: true
	// 		},
	// 		attrs: {
	// 			attr: 'attr'
	// 		},
	// 		slots: {
	// 			default: '<span data-slot-attr>default-slot</span>'
	// 		}
	// 	})
	// })

	it('with comment node in default slot', () => {
		const wrapper = mount(Primitive, {
			attrs: {
				'data-parent-attr': 'parent'
			},
			props: {
				asChild: true
			},
			slots: {
				default: `
				<!-- this is a comment -->
				<span data-child-attr="child">default-slot</span>
				`
			}
		})

		expect(wrapper.find('span').attributes('data-parent-attr')).toBe('parent')
		expect(wrapper.find('span').attributes('data-child-attr')).toBe('child')
	})

	it('should renders multiple child elements', () => {
		const wrapper = mount(Primitive, {
			slots: {
				default: '<div>1</div><div>2</div><div>3</div>'
			}
		})

		const element = wrapper.find('div')
		expect(element.findAll('div').length).toBe(3)
	})

	// it('pass custom attribute to first element', () => {
	// 	const wrapper = mount(Primitive, {
	// 		props: {
	// 			as: 'template',
	// 			type: 'button'
	// 		},
	// 		slots: {
	// 			default: '<div>1</div><div>2</div><div>3</div>'
	// 		}
	// 	})

	// 	const element = wrapper.findAll('div')
	// 	expect(element[0].attributes('type')).toBe('button')
	// 	expect(element[1].attributes('type')).toBeUndefined()
	// 	expect(element[2].attributes('type')).toBeUndefined()
	// })
})
