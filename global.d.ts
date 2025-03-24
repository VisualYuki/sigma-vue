type UiTeleport = typeof import('./src/components/teleport/teleport.vue')
type UiOverlay = typeof import('./src/components/overlay/overlay.ts')
type UiAlert = typeof import('./src/components/alert/alert.vue')
type UiButton = typeof import('./src/components/button/button.vue')
type UiIcon = typeof import('./src/components/icon/icon.vue')
type UiCheckbox = typeof import('./src/components/checkbox/checkbox.vue')
type UiAccordion = typeof import('./src/components/accordion/accordion.vue')
type UiAccordionItem = typeof import('./src/components/accordion/accordion-item.vue')
type UiModal = typeof import('./src/components/modal/modal.vue')

declare module 'vue' {
	export interface GlobalComponents {
		UiTeleport: UiTeleport['default']
		UiAlert: UiAlert['default']
		UiAccordion: UiAccordion['default']
		UiCheckbox: UiCheckbox['default']
		UiIcon: UiIcon['default']
		UiButton: UiButton['default']
		UiAccordionItem: UiAccordionItem['default']
		UiOverlay: UiOverlay['default']
		UiModal: UiModal['default']
	}
}

export {}
