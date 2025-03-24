import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import {UiAccordion, UiAccordionItem} from './'
import {useNamespace} from '@/utils/use-namespace'
import {h} from 'vue'

describe('', () => {
	const ns = useNamespace('accordion-item')

	it('without accordion', async () => {
		const modelValue = ['1', '2']

		const wrapper = mount(UiAccordion, {
			props: {accordion: false, modelValue: modelValue, 'onUpdate:modelValue': (e) => wrapper.setProps({modelValue: e})},
			slots: {
				default: [h(UiAccordionItem, {name: '1'}), h(UiAccordionItem, {name: '2'}), h(UiAccordionItem, {name: '3'})]
			}
		})

		expect(wrapper.find("[name='1']").classes()).toContain(ns.m('active'))
		expect(wrapper.find("[name='2']").classes()).toContain(ns.m('active'))
		expect(wrapper.find("[name='3']").classes()).not.toContain(ns.m('active'))

		await wrapper.find("[name='1'] " + '.' + ns.e('trigger')).trigger('click')
		await wrapper.find("[name='3'] " + '.' + ns.e('trigger')).trigger('click')

		expect(wrapper.find("[name='1']").classes()).not.toContain(ns.m('active'))
		expect(wrapper.find("[name='2']").classes()).toContain(ns.m('active'))
		expect(wrapper.find("[name='3']").classes()).toContain(ns.m('active'))
	})

	it('with accordion', async () => {
		const modelValue = ['1']

		const wrapper = mount(UiAccordion, {
			props: {accordion: true, modelValue: modelValue, 'onUpdate:modelValue': (e) => wrapper.setProps({modelValue: e})},
			slots: {
				default: [h(UiAccordionItem, {name: '1'}), h(UiAccordionItem, {name: '2'}), h(UiAccordionItem, {name: '3'})]
			}
		})

		expect(wrapper.find("[name='1']").classes()).toContain(ns.m('active'))
		expect(wrapper.find("[name='2']").classes()).not.toContain(ns.m('active'))
		expect(wrapper.find("[name='3']").classes()).not.toContain(ns.m('active'))

		await wrapper.find("[name='3'] " + '.' + ns.e('trigger')).trigger('click')

		expect(wrapper.find("[name='1']").classes()).not.toContain(ns.m('active'))
		expect(wrapper.find("[name='2']").classes()).not.toContain(ns.m('active'))
		expect(wrapper.find("[name='3']").classes()).toContain(ns.m('active'))
	})
})
