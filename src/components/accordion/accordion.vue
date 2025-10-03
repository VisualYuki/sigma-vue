<template>
	<div :class="[accordionStyles.root()]" :data-name="ns.b()">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {provide} from 'vue'

	import {toggleArrayItem} from '@/utils'
	import {useNamespace} from '@/utils/use-namespace'

	import {accordionStyles} from './theme'
	import {type AccordionProps} from './types'
	import {mainContextKey} from './utils'

	const props = withDefaults(defineProps<AccordionProps>(), {
		multiply: false
	})

	const modelValue = defineModel<string[]>({default: ['']})

	const ns = useNamespace('accordion')

	provide(mainContextKey, {
		modelValue,
		toggle: (name: string) => {
			if (props.multiply) {
				toggleArrayItem(modelValue.value, name)
			} else {
				if (modelValue.value.includes(name)) {
					modelValue.value = []
				} else modelValue.value = [name]
			}
		}
	})
</script>
