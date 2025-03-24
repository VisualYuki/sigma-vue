<template>
	<div>
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {provide} from 'vue'
	import {collapseSymbol} from './utils'
	import {ComponentNames} from '@/types/configuration'

	defineOptions({
		name: ComponentNames.CollapseRoot
	})

	const modelValue = defineModel({type: Boolean, default: false})

	provide(collapseSymbol, {
		opened: modelValue,
		toggleValue: () => {
			modelValue.value = !modelValue.value
		}
	})
</script>

<style lang="scss" scoped></style>
