import accordion from './accordion.vue'
import accordionItem from './accordion-item.vue'
import {defineAsyncComponent} from 'vue'

export const UiAccordion = accordion
export const UiAccordionItem = accordionItem

export const UiAsyncAccordion = defineAsyncComponent(() => import('./accordion.vue'))
export const UiAsyncAccordionItem = defineAsyncComponent(() => import('./accordion-item.vue'))
