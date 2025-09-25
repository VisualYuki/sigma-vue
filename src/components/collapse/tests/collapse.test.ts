import {mount, VueWrapper} from '@vue/test-utils'
import defaultExample from './defaultExample.vue'
import {beforeEach, describe, expect, it} from 'vitest'

import {CollapseTrigger, CollapseContent} from '..'

describe('when initial state is opened', () => {
	let wrapper: VueWrapper<InstanceType<typeof defaultExample>>

	beforeEach(() => {
		wrapper = mount(defaultExample)

		//@ts-ignore
		wrapper.vm.value = true
	})

	it('should CollapseContent be shown', () => {
		expect(wrapper.findComponent(CollapseContent).exists()).toBe(true)
	})

	describe('when trigger is clicked', () => {
		beforeEach(async () => {
			await wrapper.findComponent(CollapseTrigger).trigger('click')
		})

		it('should CollapseContent be hidden', async () => {
			await wrapper.vm.$nextTick()
			expect(wrapper.findComponent(CollapseContent).exists()).toBe(true)
		})
	})
})

describe('when initial state is closed', () => {
	let wrapper: VueWrapper<InstanceType<typeof defaultExample>>

	beforeEach(() => {
		wrapper = mount(defaultExample, {})

		//@ts-ignore
		wrapper.vm.value = false
	})

	it('should CollapseContent be hidden', () => {
		expect(wrapper.find('[data-name="collapse-content"]').exists()).toBe(false)
	})

	describe('when trigger is clicked', () => {
		beforeEach(async () => {
			await wrapper.findComponent(CollapseTrigger).trigger('click')
		})

		it('should CollapseContent be shown', async () => {
			expect(wrapper.find('[data-name="collapse-content"]').exists()).toBe(true)
		})
	})
})
