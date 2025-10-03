import {mount, VueWrapper} from '@vue/test-utils'
import {beforeEach, describe, expect, it} from 'vitest'
import {Accordion, AccordionItem} from './'
import {useNamespace} from '@/utils/use-namespace'
import {h} from 'vue'

const ns = useNamespace('accordion-item')

describe('multiply', () => {
	let wrapper: VueWrapper<InstanceType<typeof Accordion>>

	beforeEach(() => {
		const modelValue = ['1', '2']

		wrapper = mount(Accordion, {
			props: {multiply: true, modelValue: modelValue, 'onUpdate:modelValue': (e) => wrapper.setProps({modelValue: e})},
			slots: {
				default: [h(AccordionItem, {name: '1'}), h(AccordionItem, {name: '2'}), h(AccordionItem, {name: '3'})]
			}
		})
	})

	it('first and second items should be active', () => {
		expect(wrapper.find("[name='1']").attributes('data-state')).toBe('active')
		expect(wrapper.find("[name='2']").attributes('data-state')).toBe('active')
	})

	it('third item should be unactive', () => {
		expect(wrapper.find("[name='3']").attributes('data-state')).toBe('unactive')
	})

	describe('the third item trigger is clicked', () => {
		beforeEach(async () => {
			await wrapper.find("[name='3'] " + `[data-name="${ns.e('trigger')}"`).trigger('click')
		})

		it('each item should be active', () => {
			expect(wrapper.find("[name='1']").attributes('data-state')).toBe('active')
			expect(wrapper.find("[name='2']").attributes('data-state')).toBe('active')
			expect(wrapper.find("[name='3']").attributes('data-state')).toBe('active')
		})
	})

	describe('then the first item trigger is clicked', () => {
		beforeEach(async () => {
			await wrapper.find("[name='1'] " + `[data-name="${ns.e('trigger')}"`).trigger('click')
		})

		it('first item and third item should be unactive', () => {
			expect(wrapper.find("[name='1']").attributes('data-state')).toBe('unactive')
			expect(wrapper.find("[name='3']").attributes('data-state')).toBe('unactive')
		})

		it('second item should be active', () => {
			expect(wrapper.find("[name='2']").attributes('data-state')).toBe('active')
		})

		describe('then the second item trigger is clicked', () => {
			beforeEach(async () => {
				await wrapper.find("[name='2'] " + `[data-name="${ns.e('trigger')}"`).trigger('click')
			})

			it('each item should be unactive', () => {
				expect(wrapper.find("[name='1']").attributes('data-state')).toBe('unactive')
				expect(wrapper.find("[name='2']").attributes('data-state')).toBe('unactive')
				expect(wrapper.find("[name='3']").attributes('data-state')).toBe('unactive')
			})
		})
	})
})

describe('default', () => {
	let wrapper: VueWrapper<InstanceType<typeof Accordion>>

	beforeEach(() => {
		const modelValue = ['1']

		wrapper = mount(Accordion, {
			props: {multiply: false, modelValue: modelValue, 'onUpdate:modelValue': (e) => wrapper.setProps({modelValue: e})},
			slots: {
				default: [h(AccordionItem, {name: '1'}), h(AccordionItem, {name: '2'}), h(AccordionItem, {name: '3'})]
			}
		})
	})

	it('first item should be active', () => {
		expect(wrapper.find("[name='1']").attributes('data-state')).toBe('active')
	})

	it('second and third item should be unactive', () => {
		expect(wrapper.find("[name='2']").attributes('data-state')).toBe('unactive')
		expect(wrapper.find("[name='3']").attributes('data-state')).toBe('unactive')
	})

	describe('then the first item trigger is clicked', () => {
		beforeEach(async () => {
			await wrapper.find("[name='1'] " + `[data-name="${ns.e('trigger')}"`).trigger('click')
		})
	})

	it('second and third item should be active', () => {
		expect(wrapper.find("[name='2']").attributes('data-state')).toBe('unactive')
		expect(wrapper.find("[name='3']").attributes('data-state')).toBe('unactive')
	})

	it('first item should be active', () => {
		expect(wrapper.find("[name='1']").attributes('data-state')).toBe('active')
	})

	describe('then the second item trigger is clicked', () => {
		beforeEach(async () => {
			await wrapper.find("[name='2'] " + `[data-name="${ns.e('trigger')}"`).trigger('click')
		})

		it('third item and first item should be unactive', () => {
			expect(wrapper.find("[name='1']").attributes('data-state')).toBe('unactive')
			expect(wrapper.find("[name='3']").attributes('data-state')).toBe('unactive')
		})

		it('second item should be active', () => {
			expect(wrapper.find("[name='2']").attributes('data-state')).toBe('active')
		})
	})
})
