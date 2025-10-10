import {mount, type VueWrapper} from '@vue/test-utils'
import {beforeEach, describe, expect, it} from 'vitest'

import type {RadioGroupItem} from './types'

import RadioGroup from './radio-group.vue'

describe('radio-group', () => {
	let wrapper: VueWrapper<InstanceType<typeof RadioGroup>>

	describe('when items is object', () => {
		beforeEach(async () => {
			wrapper = mount(RadioGroup, {
				props: {
					items: [
						{label: '1', value: '1'},
						{label: '2', value: '2'},
						{label: '3', value: '3'}
					] satisfies RadioGroupItem[]
				}
			})

			await wrapper.findAll('input[type="radio"]')[0]?.trigger('change')
		})

		describe('when clicking on first', () => {
			it('render snapshot', () => {
				expect(wrapper.html()).toMatchSnapshot()
			})

			it('selected first radio', () => {
				expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe('1')
			})

			describe('then clicking on second radio', () => {
				it('selected second radio', async () => {
					await wrapper.findAll('input[type="radio"]')[1]?.trigger('change')
					expect(wrapper.emitted('update:modelValue')?.[1]?.[0]).toBe('2')
				})

				it('render snapshot', () => {
					expect(wrapper.html()).toMatchSnapshot()
				})
			})
		})

		describe('when inizialized with particular radio', () => {
			it('correct selected', async () => {
				await wrapper.setProps({modelValue: 1})
				expect((wrapper.findAll('input[type="radio"]')[0]?.element as HTMLInputElement).checked).toBe(true)
			})
		})
	})

	describe('when items is string', () => {
		beforeEach(async () => {
			wrapper = mount(RadioGroup, {
				props: {
					items: [1, 2, 3]
				}
			})

			await wrapper.findAll('input[type="radio"]')[0]?.trigger('change')
		})

		it('render snapshot', () => {
			expect(wrapper.html()).toMatchSnapshot()
		})
	})
})
