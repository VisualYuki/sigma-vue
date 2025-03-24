import {mount} from '@vue/test-utils'
import {afterEach, beforeEach, describe, expect, it} from 'vitest'
import {UiTeleport} from '.'

describe('', async () => {
	beforeEach(() => {
		const el = document.createElement('div')
		el.id = 'teleportDiv'

		document.body.appendChild(el)
	})

	afterEach(() => {
		const el = document.getElementById('teleportDiv')

		if (el) document.body.removeChild(el)
	})

	it('to prop', async () => {
		mount(UiTeleport, {
			props: {
				to: '#teleportDiv'
			},
			slots: {
				default: 'default content'
			}
		})

		expect(document.getElementById('teleportDiv')?.textContent).toBe('default content')
	})

	it('disabled prop', async () => {
		mount(UiTeleport, {
			props: {
				to: '#teleportDiv',
				disabled: true
			},
			slots: {
				default: 'default content'
			}
		})

		expect(document.getElementById('teleportDiv')?.textContent).toBe('')
	})
})
