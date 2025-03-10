import {describe, expect, test} from 'vitest'
import {mount} from '@vue/test-utils'
import {defineComponent} from 'vue'
import {loadingDirective} from './index'
import {useNamespace} from '@/utils/use-namespace'

const ns = useNamespace('loading-directive', true)

function createTargetComponent(directives: string[]) {
	const directiveString = directives.reduce((acc, value) => acc + '.' + value, '')

	return defineComponent({
		directives: {
			loading: loadingDirective
		},
		props: {
			isLoading: {
				type: Boolean,
				default: true
			}
		},
		template: `<div v-loading${directiveString}="{value: isLoading, text: 'loadingText'}"> content </div>`
	})
}

describe('loading directive', async () => {
	test('fullscreen modifier', () => {
		const targetComponent = createTargetComponent(['fullscreen'])

		mount(targetComponent)

		expect(document.body.lastElementChild?.classList.contains(ns.b().replace('.', ''))).toBe(true)
	})

	test('text prop', () => {
		const targetComponent = createTargetComponent([])
		const wrapper = mount(targetComponent)

		expect(wrapper.find(ns.e('text')).text()).toBe('loadingText')
	})

	test('condition state', async () => {
		const targetComponent = createTargetComponent([])
		const wrapper = mount(targetComponent)

		expect(wrapper.find(ns.b()).exists()).toBe(true)

		await wrapper.setProps({
			isLoading: false
		})

		expect(wrapper.find(ns.b()).exists()).toBe(false)

		await wrapper.setProps({
			isLoading: true
		})
		expect(wrapper.find(ns.b()).exists()).toBe(true)
	})
})
