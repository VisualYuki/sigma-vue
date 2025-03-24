import {defineAsyncComponent} from 'vue'
import Modal from './modal.vue'

export const UiAsyncModal = defineAsyncComponent(() => import('./modal.vue'))
export const UiModal = Modal
