import {describe, expect, it} from 'vitest'
import {UiAlert} from './'
import {mount} from '@vue/test-utils'
import {colors} from '@/types/configuration'
import {alertVariants} from '@/components/alert/theme'
import {useNamespace} from '@/utils/use-namespace'

const ns = useNamespace('alert', true)

describe('', () => {
	const props = {title: 'custom title'}

	it.each([
		['with title', {props: {...props}}],
		['with description', {props: {...props, description: 'custom description'}}],
		[
			'overrideUi prop',
			{
				props: {
					...props,
					overrideUi: {
						root: 'override-root',
						title: 'override-title',
						wrapper: 'override-wrapper',
						close: 'override-close'
					}
				}
			}
		],
		...colors.map((color: string) => {
			return [`color: ${color}`, {props: {...props, color: color}}]
		}),
		...alertVariants.map((variant: string) => {
			return [`variant: ${variant}`, {props: {...props, variant: variant}}]
		}),
		['closable prop', {props: {closable: true}}]
		//@ts-ignore
	])('%s', (name: string, {props}) => {
		const wrapper = mount(UiAlert, {props})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('closable prop', async () => {
		const wrapper = mount(UiAlert, {props: {closable: true}})

		await wrapper.find(ns.e('close')).trigger('click')

		expect(wrapper.emitted()).toHaveProperty('close')
		expect(wrapper.emitted()).toHaveProperty('update:modelValue')
	})

	it('v-model', async () => {
		const wrapper = mount(UiAlert, {
			props: {
				modelValue: true,
				'onUpdate:modelValue': (e) => wrapper.setProps({modelValue: e}),
				closable: true
			}
		})

		expect(wrapper.props('modelValue')).toBe(true)

		await wrapper.find(ns.e('close')).trigger('click')
		expect(wrapper.props('modelValue')).toBe(false)

		await wrapper.setProps({
			modelValue: false
		})
		expect(wrapper.props('modelValue')).toBe(false)
	})

	// it('title prop & description prop', async () => {
	// 	const wrapper = mount(UiAlert, {
	// 		props: {
	// 			title: 'title1'
	// 		}
	// 	})

	// 	expect(wrapper.find('.' + ns.em('title', 'with-description')).exists()).toBe(false)
	// 	expect(wrapper.find('.' + ns.e('title')).exists()).toBe(true)
	// 	expect(wrapper.find('.' + ns.e('description')).exists()).toBe(false)

	// 	await wrapper.setProps({
	// 		description: 'description 1'
	// 	})

	// 	expect(wrapper.find('.' + ns.em('title', 'with-description')).exists()).toBe(true)
	// 	expect(wrapper.find('.' + ns.e('description')).exists()).toBe(true)
	// })

	// it('showIcon prop', async () => {
	// 	const wrapper = mount(UiAlert, {
	// 		props: {
	// 			center: true
	// 		}
	// 	})

	// 	wrapper.find('.' + ns.e('center'))
	// })
})
