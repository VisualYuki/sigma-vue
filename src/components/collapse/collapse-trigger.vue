<template>
	<div @click="methods.handle()">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {inject} from 'vue'
	import {collapseSymbol, type collapseRootContext} from './utils'
	import {ComponentNames} from '@/types/configuration'

	defineOptions({
		name: ComponentNames.CollapseTrigger
	})

	const injected = inject<collapseRootContext>(collapseSymbol)

	const methods = {
		handle() {
			injected?.toggleValue()
		}
	}
</script>

<style lang="scss" scoped></style>
