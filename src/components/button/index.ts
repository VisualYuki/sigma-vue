import {defineAsyncComponent} from 'vue'
import Button from './button.vue'

export const UiButton = Button
export const UiAsyncButton = defineAsyncComponent(() => import('./button.vue'))
