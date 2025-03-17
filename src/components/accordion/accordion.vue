<template>
	<div :class="[ui.root(), ns.b()]">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {ComponentNames} from '@/types/configuration'
	import {computed, provide} from 'vue'
	import {tvInstance} from './theme'
	import {useNamespace} from '@/utils/use-namespace'
	import {accordionSymbol} from './utils'

	defineOptions({
		name: ComponentNames.Accordion
	})

	const props = defineProps({
		accordion: {
			type: Boolean,
			default: false
		}
	})

	const modelValue = defineModel<string[]>({default: ['']})
	const ui = computed(() => tvInstance({}))
	const ns = useNamespace('accordion')

	provide(accordionSymbol, {
		props,
		model: modelValue,
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

<style lang="scss" scoped></style>
