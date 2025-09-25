<template>
	<div :class="[accordionStyles.root()]" :data-name="ns.b()">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {provide} from 'vue'
	import {accordionStyles} from './theme'
	import {useNamespace} from '@/utils/use-namespace'
	import {mainContextKey, type AccordionProps} from './utils'

	const props = withDefaults(defineProps<AccordionProps>(), {accordion: false})

	const modelValue = defineModel<string[]>({default: ['']})

	const ns = useNamespace('accordion')

	provide(mainContextKey, {
		modelValue,
		toggle: (name: string) => {
			if (props.accordion) {
				modelValue.value = [name]
			} else {
				if (modelValue.value.includes(name)) {
					modelValue.value.splice(modelValue.value.indexOf(name), 1)
				} else {
					modelValue.value.push(name)
				}
			}
		}
	})
</script>
