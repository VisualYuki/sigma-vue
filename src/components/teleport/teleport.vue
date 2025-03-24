<template>
	<Teleport :to="$props.to" :disabled="$props.disabled">
		<slot name="default">default</slot>
	</Teleport>
</template>

<script lang="ts">
	import {ComponentNames} from '@/types/configuration'
	import {defineComponent} from 'vue'

	export default defineComponent({
		name: ComponentNames.Teleport,
		props: {
			to: {
				type: String,
				default: 'body'
			},
			disabled: {
				type: Boolean,
				default: false
			}
		}
	})
</script>

<style lang="scss" scoped></style>
