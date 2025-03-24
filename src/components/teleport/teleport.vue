<template>
	<Teleport :to="props.to" :disabled="props.disabled">
		<slot name="default"></slot>
	</Teleport>
</template>

<script lang="ts" setup>
	import {ComponentNames} from '@/types/configuration'

	defineOptions({
		name: ComponentNames.Teleport
	})

	const props = defineProps({
		to: {
			type: String,
			default: 'body'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	})
</script>

<style lang="scss" scoped></style>
