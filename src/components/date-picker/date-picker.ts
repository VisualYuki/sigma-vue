import {describe, it, expect, beforeEach} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import DatePicker from './date-picker.vue'

describe('date mode', () => {
	let wrapper: VueWrapper<InstanceType<typeof DatePicker>>

	beforeEach(() => {
		wrapper = mount(DatePicker, {
			props: {
				mode: 'date'
			}
		})
	})

	it('render snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot()
	})
})
