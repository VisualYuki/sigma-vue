<template>
	<div data-name="collapse-trigger" :class="collapseTriggerStyles.root()" @click="methods.handle()">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {inject} from 'vue'
	import {MainContextKey, type MainContext} from './utils'
	import {collapseTriggerStyles} from './theme'

	const injected = inject<MainContext>(MainContextKey)

	const methods = {
		handle() {
			injected?.toggleValue()
		}
	}
</script>
