import {defineAsyncComponent} from 'vue'
import Teleport from './teleport.vue'

export const UiAsyncTeleport = defineAsyncComponent(() => import('./teleport.vue'))
export const UiTeleport = Teleport
