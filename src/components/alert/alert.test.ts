import {describe, expect, it} from 'vitest'
import {UiAlert} from './'
import {mount} from '@vue/test-utils'
import {colors} from '@/types/configuration'
import {alertVariants} from '@/components/alert/styles'
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
		const wrapper = mount(UiAlert, {
			props: {closable: true}
		})

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
})
