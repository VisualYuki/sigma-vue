<template>
	<UiCollapseTransition>
		<div v-if="injected?.opened.value" class="transition-collapse-target">
			<slot></slot>
		</div>
	</UiCollapseTransition>
</template>

<script lang="ts" setup>
	import {inject} from 'vue'
	import {UiCollapseTransition} from '../transition'
	import {collapseSymbol, type collapseRootContext} from './utils'
	import {ComponentNames} from '@/types/configuration'

	defineOptions({
		name: ComponentNames.CollapseContent
	})

	const injected = inject<collapseRootContext>(collapseSymbol)
</script>

<style lang="scss" scoped></style>
