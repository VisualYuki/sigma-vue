import {defineAsyncComponent} from 'vue'
import Alert from './alert.vue'

export const UiAlert = Alert
export const UiAsyncAlert = defineAsyncComponent(() => import('./alert.vue'))
