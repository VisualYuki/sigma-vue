<template>
	<div data-name="collapse-root" :class="collapseStyles.root()">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {provide} from 'vue'

	import {collapseStyles} from './theme'
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
		opened: modelValue,
		toggleValue: () => {
			if (props.disabled) return
			modelValue.value = !modelValue.value
		}
	})
</script>
