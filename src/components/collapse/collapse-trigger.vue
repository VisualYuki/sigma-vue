<template>
	<div @click="methods.handle()">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {inject} from 'vue'
	import {collapseSymbol, type collapseRootContext} from './utils'

	defineOptions({
		name: 'UiCollapseTrigger'
	})

	const injected = inject<collapseRootContext>(collapseSymbol)

	const methods = {
		handle() {
			injected?.toggleValue()
		}
	}
</script>

<style lang="scss" scoped></style>
