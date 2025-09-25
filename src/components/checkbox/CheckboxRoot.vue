<template>
	<div @click="toggleState()">
		{{ modelValue }}
	</div>
</template>

<script lang="ts" setup>
	import type {CheckboxProps, Value} from './utils'

	const props = withDefaults(defineProps<CheckboxProps>(), {disabled: false})

	const modelValue = defineModel<Value>({
		default: false
	})

	function toggleState() {
		modelValue.value = !modelValue.value

		//this.$emit('change', !this.modelValue)
		//this.$emit('update:modelValue', !this.modelValue)
	}
</script>

<style lang="scss" scoped></style>
