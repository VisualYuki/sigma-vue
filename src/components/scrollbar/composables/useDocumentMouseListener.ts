import {ref} from 'vue'

export function useDocumentMouseListener(mouseMove: (e: MouseEvent) => void, mouseUp: (e: MouseEvent) => void) {
	const documentMouseMoveListener = ref<((event: MouseEvent) => void) | null>(null)
	const documentMouseUpListener = ref<((event: MouseEvent) => void) | null>(null)

	function bindDocumentMouseListener() {
		if (!documentMouseMoveListener.value) {
			documentMouseMoveListener.value = (event: MouseEvent) => {
				mouseMove(event)
			}

			document.addEventListener('mousemove', documentMouseMoveListener.value)
		}

		if (!documentMouseUpListener.value) {
			documentMouseUpListener.value = (e: MouseEvent) => {
				unbindDocumentMouseListener()

				mouseUp(e)
			}

			document.addEventListener('mouseup', documentMouseUpListener.value)
		}
	}

	function unbindDocumentMouseListener() {
		document.body.classList.remove('select-none')

		if (documentMouseMoveListener.value) {
			document.removeEventListener('mousemove', documentMouseMoveListener.value)
			documentMouseMoveListener.value = null
		}

		if (documentMouseUpListener.value) {
			document.removeEventListener('mouseup', documentMouseUpListener.value)
			documentMouseUpListener.value = null
		}
	}

	return {
		bindDocumentMouseListener,
		unbindDocumentMouseListener
	}
}
