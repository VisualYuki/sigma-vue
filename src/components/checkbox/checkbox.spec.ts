import {mount, VueWrapper} from '@vue/test-utils'
import {beforeEach, describe, expect, it} from 'vitest'

import {useNamespace} from '@/utils'

import Checkbox from './checkbox.vue'

const ns = useNamespace('checkbox')

describe('when default checkbox', () => {
	let wrapper: VueWrapper<InstanceType<typeof Checkbox>>

	beforeEach(() => {
		wrapper = mount(Checkbox)
	})

	it('render snapshot', async () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	it('modelValue is "false"', () => {
		expect(wrapper.props('modelValue')).toBe(false)
	})

	describe('then clicking on label', () => {
		beforeEach(async () => {
			await wrapper.trigger('click')
		})

		it('click event is emitted once', () => {
			expect(wrapper.emitted('click')).toHaveLength(1)
		})
	})

	describe('then clicking on fake input', () => {
		beforeEach(async () => {
			await wrapper.find(`[data-name="${ns.e('fake-input')}"]`).trigger('click')
		})

		it('click event is emitted once', () => {
			expect(wrapper.emitted('click')).toHaveLength(1)
		})
	})
})

describe('when initialized with true', () => {
	let wrapper: VueWrapper<InstanceType<typeof Checkbox>>

	beforeEach(() => {
		wrapper = mount(Checkbox, {
			attachTo: document.body,
			props: {
				modelValue: true,
				'onUpdate:modelValue': (e) => {
					wrapper.setProps({modelValue: e})
				}
			}
		})
	})

	it('render snapshot', async () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	it('have checked state', () => {
		expect(wrapper.props('modelValue')).toBe(true)
	})

	describe('then clicking', async () => {
		it('have unchecked state', async () => {
			await wrapper.trigger('click')

			expect(wrapper.props('modelValue')).toBe(false)
		})
	})
})

describe("when initialized with 'indeterminate'", () => {
	let wrapper: VueWrapper<InstanceType<typeof Checkbox>>

	beforeEach(() => {
		wrapper = mount(Checkbox, {
			attachTo: document.body,
			props: {
				modelValue: 'indeterminate',
				'onUpdate:modelValue': (e) => {
					wrapper.setProps({modelValue: e})
				}
			}
		})
	})

	it('modalValue is "indeterminate"', () => {
		expect(wrapper.props('modelValue')).toBe('indeterminate')
	})

	describe('then clicking', () => {
		beforeEach(async () => {
			await wrapper.trigger('click')
		})

		it('modalValue is "true"', () => {
			expect(wrapper.props('modelValue')).toBe(true)
		})
	})

	describe('then modalValue is set to true', () => {
		beforeEach(() => {
			wrapper.setProps({modelValue: true})
		})

		it('modalValue is "true"', () => {
			expect(wrapper.props('modelValue')).toBe(true)
		})

		describe("then modalValue is set to 'indeterminate'", () => {
			beforeEach(() => {
				wrapper.setProps({modelValue: 'indeterminate'})
			})

			it('modalValue is "true"', () => {
				expect(wrapper.props('modelValue')).toBe('indeterminate')
			})
		})
	})

	describe('then modalValue is set to false', () => {
		beforeEach(() => {
			wrapper.setProps({modelValue: false})
		})

		it('modalValue is "false"', () => {
			expect(wrapper.props('modelValue')).toBe(false)
		})
	})
})
