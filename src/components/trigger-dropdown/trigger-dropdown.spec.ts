import {beforeEach, describe, expect, it, vi} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import * as utils from '@/utils'
import * as vueuse from '@vueuse/core'

import type {Mock} from 'vitest'

import TriggerDropdown from './trigger-dropdown.vue'
import {useNamespace} from '@/utils'

const ns = useNamespace('trigger-dropdown')

describe('when modelValue is false', () => {
	it('should have opened trigger slot', () => {
		const wrapper = mount(TriggerDropdown, {
			slots: {
				trigger: 'trigger slot'
			}
		})

		expect(wrapper.find(`[data-name="${ns.e('trigger')}"]`).text()).toBe('trigger slot')
	})

	it('should have closed content slot', () => {
		const wrapper = mount(TriggerDropdown, {
			slots: {
				content: 'content slot'
			}
		})

		expect(wrapper.find(`[data-name="${ns.e('content')}"]`).exists()).toBeFalsy()
	})

	it('should have closed state', () => {
		const wrapper = mount(TriggerDropdown, {})

		expect(wrapper.vm.modelValue).toBeFalsy()
	})
})

describe('when modelValue is true', async () => {
	let wrapper: VueWrapper<InstanceType<typeof TriggerDropdown>>

	beforeEach(async () => {
		wrapper = mount(TriggerDropdown, {
			slots: {
				trigger: 'trigger slot',
				content: 'content slot'
			},
			props: {
				modelValue: true,
				'onUpdate:modelValue': (e) => {
					wrapper.setProps({modelValue: e})
				}
			},
			attachTo: 'body'
		})
	})

	it('should have opened state', async () => {
		expect(wrapper.vm.modelValue).toBe(true)
	})

	it('should have opened content slot', async () => {
		expect(wrapper.find(`[data-name="${ns.e('content')}"]`).text()).toBe('content slot')
	})

	it('should have closed state when clicking outside', async () => {
		document.body.click()

		await wrapper.vm.$nextTick()

		expect(wrapper.vm.modelValue).toBe(false)
	})

	it('should open above when there is not enough space below', async () => {
		vi.mock('@vueuse/core', async () => {
			const actual = await vi.importActual('@vueuse/core')
			return {
				...actual,
				useElementBounding: vi.fn(() => ({bottom: {value: 0}}))
			}
		})

		vi.mock('@/utils', async () => {
			const actual = await vi.importActual('@/utils')
			return {
				...actual,
				getViewport: vi.fn(() => ({width: 1024, height: 1000}))
			}
		})
		;(utils.getViewport as Mock).mockReturnValue({width: 1024, height: 300})
		;(vueuse.useElementBounding as Mock).mockReturnValue({bottom: {value: 400}})

		const wrapper = mount(TriggerDropdown, {
			slots: {trigger: 'trigger', content: 'content'},
			props: {
				modelValue: true
			},
			attachTo: document.body
		})

		await wrapper.vm.$nextTick()

		const content = wrapper.find(`[data-name="${ns.e('content')}"]`)
		expect(content.exists()).toBe(true)
		expect(content.classes()).toContain('bottom-full')
		expect(content.classes()).not.toContain('top-full')
	})
})
