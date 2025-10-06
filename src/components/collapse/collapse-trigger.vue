<template>
	<div
		data-name="collapse-trigger"
		:class="collapseTriggerStyles.root({disabled: injected?.disabled.value})"
		class="flex"
		tabindex="0"
		@click="methods.handle()"
		@keydown.space.prevent="methods.handle()"
		@keydown.enter.prevent="methods.handle()"
	>
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {inject} from 'vue'

	import {collapseTriggerStyles} from './styles'
	import {type MainContext} from './types'
	import {MainContextKey} from './utils'

	const injected = inject<MainContext>(MainContextKey)

	const methods = {
		handle() {
			injected?.toggleValue()
		}
	}
</script>
