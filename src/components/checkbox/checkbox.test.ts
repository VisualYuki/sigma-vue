import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import {UiCheckbox} from '.'

describe('', () => {
	it.each([
		['label prop', {props: {label: 'custom label'}}],
		['size prop', {props: {size: 'small'}}],
		['disabled', {props: {disabled: true}}]
	])('%s', (name, {props}) => {
		//@ts-ignore
		const wrapper = mount(UiCheckbox, {props})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
