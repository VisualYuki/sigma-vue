import {onDeactivated, onMounted, ref} from 'vue'

export function useDocumentResizeListener(moveBar: () => void) {
	const documentResizeListener = ref<(() => void) | null>(null)

	function bindDocumentResizeListener() {
		if (documentResizeListener.value) return

		documentResizeListener.value = () => {
			moveBar()
		}

		window.addEventListener('resize', documentResizeListener.value)
	}

	function unbindDocumentResizeListener() {
		if (documentResizeListener.value) {
			window.removeEventListener('resize', documentResizeListener.value)
			documentResizeListener.value = null
		}
	}

	onMounted(() => {
		bindDocumentResizeListener()
	})

	onDeactivated(() => {
		unbindDocumentResizeListener()
	})
}
