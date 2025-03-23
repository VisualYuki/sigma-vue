import {defineAsyncComponent} from 'vue'
import Checkbox from './checkbox.vue'

export const UiCheckbox = Checkbox
export const UiAsyncCheckbox = defineAsyncComponent(() => import('./checkbox.vue'))
