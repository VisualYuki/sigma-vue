import {mount, VueWrapper} from '@vue/test-utils'
import {describe, expect, it, vi} from 'vitest'
import {UiModal} from './index'
import {useNamespace} from '@/utils/use-namespace'
import UiOverlay from '../overlay/overlay'
import {UiButton} from '../button'

const ns = useNamespace('modal', true)

async function triggerCompositeClick(wrapper: VueWrapper) {
	await wrapper.trigger('mousedown')
	await wrapper.trigger('mouseup')
	await wrapper.trigger('click')
}

describe('modal', () => {
	it('closeOnBackdrop prop', async () => {
		const wrapper = mount(UiModal, {
			props: {
				modelValue: true,
				'onUpdate:modelValue': (e) => wrapper.setProps({modelValue: e})
			},
			shallow: true,
			global: {
				stubs: {
					UiOverlay: UiOverlay
				}
			}
		})

		expect(wrapper.props('modelValue')).toBe(true)
		await triggerCompositeClick(wrapper.findComponent(UiOverlay))
		expect(wrapper.props('modelValue')).toBe(false)

		await wrapper.setProps({modelValue: true, closeOnBackdrop: false})
		await triggerCompositeClick(wrapper.findComponent(UiOverlay))
		expect(wrapper.props('modelValue')).toBe(true)
	})

	it('beforeClose', async () => {
		const beforeClose = vi.fn()

		const wrapper = mount(UiModal, {
			props: {
				beforeClose: beforeClose,
				modelValue: true
			},
			global: {
				stubs: {
					UiButton: UiButton
				}
			}
		})

		await wrapper.find(ns.e('close')).trigger('click')

		expect(beforeClose).toHaveBeenCalled()
		expect(wrapper.vm.modelValue).toBe(true)
	})
})
