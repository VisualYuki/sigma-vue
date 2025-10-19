import {expect, describe, it, beforeEach, vi} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import DayMenu from './day-menu.vue'

describe('DayMenu with single select mode', () => {
	let wrapper: VueWrapper<InstanceType<typeof DayMenu>>

	beforeEach(() => {
		vi.useFakeTimers()
		vi.setSystemTime(new Date(2025, 7, 17, 10, 30, 45))

		wrapper = mount(DayMenu)
	})

	it('render snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	describe('when clicking on 15th day', () => {
		beforeEach(() => {
			wrapper.find('[data-day="15"]').trigger('click')
		})

		it('should set selected date to 15th day', () => {
			expect(wrapper.vm.selectedDate?.format('YYYY-MM-DD')).toBe('2025-08-15')
		})

		describe('when clicking on 16th day', () => {
			beforeEach(() => {
				wrapper.find('[data-day="16"]').trigger('click')
			})

			it('should set selected date to 16th day', () => {
				expect(wrapper.vm.selectedDate?.format('YYYY-MM-DD')).toBe('2025-08-16')
			})
		})
	})
})

describe('DayMenu with range select mode', () => {
	let wrapper: VueWrapper<InstanceType<typeof DayMenu>>

	beforeEach(() => {
		vi.useFakeTimers()
		vi.setSystemTime(new Date(2025, 7, 17, 10, 30, 45))

		wrapper = mount(DayMenu, {
			props: {
				selectMode: 'range'
			}
		})
	})

	it('render snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})

	describe('when clicking on 15th day', () => {
		beforeEach(() => {
			wrapper.find('[data-day="15"]').trigger('click')
		})

		it('should set start selected date to 15th day', () => {
			expect(wrapper.vm.startSelectedDate?.format('YYYY-MM-DD')).toBe('2025-08-15')
		})

		describe('when clicking on 17th day', () => {
			beforeEach(() => {
				wrapper.find('[data-day="17"]').trigger('click')
			})

			it('should set end selected date to 17th day', () => {
				expect(wrapper.vm.endSelectedDate?.format('YYYY-MM-DD')).toBe('2025-08-17')
			})

			it('there is in-range state for 16th day', () => {
				expect(wrapper.find('[data-day="16"]').attributes('data-state')).toBe('in-range')
			})
		})
	})
})
