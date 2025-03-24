import {defineAsyncComponent} from 'vue'
import overlay from './overlay'

export const UiAsyncOverlay = defineAsyncComponent(() => import('./overlay'))
export const UiOverlay = overlay
