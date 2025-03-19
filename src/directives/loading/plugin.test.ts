import {describe, expect, test} from 'vitest'
import {useNamespace} from '@/utils/use-namespace'
import {loadingPlugin} from './plugin'

const ns = useNamespace('loading-directive', true)

document.body.innerHTML = `
<div id='target'>
</div>
`

describe('loading directive', async () => {
	test('default', () => {
		const targetComponent = loadingPlugin({
			target: document.getElementById('target') as HTMLDivElement,
			background: 'red',
			customClass: 'custom-class',
			text: 'custom-text'
		})

		const root = document.body.querySelector(ns.b()) as HTMLDivElement

		expect(root?.classList).toContain('custom-class')
		expect(root.querySelector(ns.e('text'))?.textContent).toBe('custom-text')
		expect(root?.style.background).toBe('red')

		targetComponent.close()

		expect(document.body.querySelector(ns.b())).toBeFalsy()
	})

	test('fullscreen', async () => {
		const targetComponent = loadingPlugin({
			target: document.getElementById('target') as HTMLDivElement,
			isFullscreen: true
		})

		const root = document.body.querySelector(ns.b()) as HTMLDivElement

		expect(root?.parentElement).toBe(document.body)

		targetComponent.close()
	})
})
