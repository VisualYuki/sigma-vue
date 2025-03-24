import {defineAsyncComponent} from 'vue'
import Skeleton from './skeleton.vue'

export const UiSkeleton = Skeleton
export const UiAsyncSkeleton = defineAsyncComponent(() => import('./skeleton.vue'))
