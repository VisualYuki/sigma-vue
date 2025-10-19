import {mount} from '@vue/test-utils'
import {describe, it} from 'vitest'

import {useNamespace} from '@/utils'

import Template from './template.vue'

const ns = useNamespace('scrollbar')

describe('Scrollbar', () => {
	it('should render', async () => {
		const wrapper = mount(Template)
		debugger
		await wrapper.find(`[data-name='${ns.e('content')}']`).trigger('scroll', {
			pageX: 100,
			pageY: 100
		})
		//debugger
		//expect(wrapper.find('#content').trigger('scroll')).toBe(true)
	})
})
