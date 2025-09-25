<template>
	<div data-name="collapse-root" :class="collapseStyles.root()">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
	import {provide} from 'vue'
	import {MainContextKey, type MainContext} from './utils'
	import {collapseStyles} from './theme'

	const modelValue = defineModel({type: Boolean, default: false})

	provide<MainContext>(MainContextKey, {
		opened: modelValue,
		toggleValue: () => {
			modelValue.value = !modelValue.value
		}
	})
</script>
