import {expect, describe, it, beforeEach, vi} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import TimeMenu from './time-menu.vue'

global.HTMLElement.prototype.scrollIntoView = vi.fn()

describe('TimeMenu', () => {
	let wrapper: VueWrapper<InstanceType<typeof TimeMenu>>

	beforeEach(() => {
		wrapper = mount(TimeMenu, {})
	})

	it('render snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	describe('when clicking on zero hours', () => {
		beforeEach(() => {
			wrapper.find('[data-name*="hours-column"] > div:first-child').trigger('click')
		})

		it('should set selected hours to 0', () => {
			expect(wrapper.vm.hours).toBe(0)
		})

		it('should scroll to selected hours', () => {
			expect(wrapper.vm.hours).toBe(0)
		})

		describe('after clicking on one hours', () => {
			beforeEach(() => {
				wrapper.find('[data-name*="hours-column"] > div:nth-child(2)').trigger('click')
			})

			it('should set selected hours to 1', () => {
				expect(wrapper.vm.hours).toBe(1)
			})

			it('should scroll to selected hours', () => {
				expect(wrapper.vm.hours).toBe(1)
			})
		})
	})

	describe('when v-model:hours is set to 2', () => {
		beforeEach(async () => {
			await wrapper.setProps({hours: 2})
		})

		it('item with data-hours="2" should be selected', async () => {
			expect(wrapper.find('[data-hours="2"]').attributes('data-state')).toBe('selected')
		})
	})
})
