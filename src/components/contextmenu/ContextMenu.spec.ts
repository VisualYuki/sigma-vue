import {mount} from '@vue/test-utils'
import {describe, expect, it, vi} from 'vitest'
import ContextMenu from './ContextMenu.vue'
import {useNamespace} from '@/utils/use-namespace'

// vi.mock('@vueuse/core', async () => {
//   const actual = await vi.importActual('@vueuse/core');
//   return {
//     ...actual,
//     useWindowSize: () => ({
//       width: { value: 1000 },
//       height: { value: 800 },
//     }),
//   };
// });

const mockEvent = {
	preventDefault: vi.fn()
} as unknown as MouseEvent
const ns = useNamespace('contextmenu')

describe('contextmenu', () => {
	it('maxWidth prop', async () => {
		const wrapper = mount(ContextMenu, {
			props: {
				maxWidth: '100%',
				items: []
			},
			global: {
				stubs: {
					Teleport: true
				}
			}
		})

		await wrapper.vm.open({preventDefault: () => {}} as MouseEvent)

		expect(wrapper.find(`[data-name="${ns.b()}"]`).attributes('style')).include('max-width: 100%;')
	})

	describe('when positioning root element', async () => {
		vi.mock('@vueuse/core', async () => {
			const actual = await vi.importActual('@vueuse/core')
			return {
				...actual,
				useWindowSize: () => ({
					width: {value: 1000},
					height: {value: 1000}
				})
			}
		})

		it('should dont add an offset', async () => {
			const wrapper = mount(ContextMenu, {
				props: {
					items: []
				},
				global: {
					stubs: {
						Teleport: true
					}
				}
			})

			const mockEvent = {
				clientX: 100,
				clientY: 100,
				preventDefault: vi.fn()
			} as unknown as MouseEvent

			wrapper.vm.$nextTick(() => {
				const rootElement = wrapper.find(`[data-name="${ns.b()}"]`).element as HTMLElement

				vi.spyOn(rootElement, 'offsetWidth', 'get').mockReturnValue(50)
				vi.spyOn(rootElement, 'offsetHeight', 'get').mockReturnValue(50)
			})

			await wrapper.vm.open(mockEvent)

			// @ts-expect-error: rootStyles is not typed on the instance
			expect(wrapper.vm.rootStyles).toEqual({
				left: '100px',
				top: '100px'
			})
		})

		it('should add a right offset', async () => {
			const wrapper = mount(ContextMenu, {
				props: {
					items: []
				},
				global: {
					stubs: {
						Teleport: true
					}
				}
			})

			const mockEvent = {
				clientX: 990,
				clientY: 500,
				preventDefault: vi.fn()
			} as unknown as MouseEvent

			wrapper.vm.$nextTick(() => {
				const rootElement = wrapper.find(`[data-name="${ns.b()}"]`).element as HTMLElement

				vi.spyOn(rootElement, 'offsetWidth', 'get').mockReturnValue(50)
				vi.spyOn(rootElement, 'offsetHeight', 'get').mockReturnValue(50)
			})

			await wrapper.vm.open(mockEvent)

			// @ts-expect-error: rootStyles is not typed on the instance
			expect(wrapper.vm.rootStyles).toEqual({
				right: '0',
				top: '500px'
			})
		})

		it('should add a right offset and a bottom offset', async () => {
			const wrapper = mount(ContextMenu, {
				props: {
					items: []
				},
				global: {
					stubs: {
						Teleport: true
					}
				}
			})

			const mockEvent = {
				clientX: 990,
				clientY: 990,
				preventDefault: vi.fn()
			} as unknown as MouseEvent

			wrapper.vm.$nextTick(() => {
				const rootElement = wrapper.find(`[data-name="${ns.b()}"]`).element as HTMLElement

				vi.spyOn(rootElement, 'offsetWidth', 'get').mockReturnValue(50)
				vi.spyOn(rootElement, 'offsetHeight', 'get').mockReturnValue(50)
			})

			await wrapper.vm.open(mockEvent)

			// @ts-expect-error: rootStyles is not typed on the instance
			expect(wrapper.vm.rootStyles).toEqual({
				right: '0',
				bottom: '0'
			})
		})
	})

	it('should close after scrolling', async () => {
		const wrapper = mount(ContextMenu, {
			attachTo: document.body,
			props: {
				items: []
			},
			global: {
				stubs: {
					Teleport: true
				}
			}
		})

		await wrapper.vm.open(mockEvent)

		expect(wrapper.vm.isOpened).toBe(true)

		window.dispatchEvent(new Event('scroll', {bubbles: true}))

		await wrapper.vm.$nextTick()

		expect(wrapper.vm.isOpened).toBe(false)
	})
})
