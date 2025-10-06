<template>
	<div data-name="collapse-root" :class="collapseStyles.root({disabled: props.disabled})">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {computed, provide} from 'vue'

	import {collapseStyles} from './styles'
	import {type MainContext} from './types'
	import {MainContextKey} from './utils'

	const modelValue = defineModel({default: false, type: Boolean})

	const props = withDefaults(
		defineProps<{
			disabled?: boolean
		}>(),
		{
			disabled: false
		}
	)

	provide<MainContext>(MainContextKey, {
		disabled: computed(() => props.disabled),
		opened: modelValue,
		toggleValue: () => {
			if (props.disabled) return
			modelValue.value = !modelValue.value
		}
	})
</script>
