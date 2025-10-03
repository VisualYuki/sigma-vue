import {ref} from 'vue'
const counter = ref(0)

export function useDialogCounter() {
	function add() {
		counter.value++
	}

	function subtract() {
		counter.value--
	}

	return {
		counter,
		add,
		subtract
	}
}
