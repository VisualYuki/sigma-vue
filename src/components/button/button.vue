<template>
	<component
		:is="props.tag"
		:class="[buttonStyles.root({variant: props.variant, color: props.color, size: props.size})]"
		:disabled="props.disabled"
		:data-name="ns.b()"
	>
		<slot></slot>
	</component>
</template>

<script lang="ts" setup>
	import {useNamespace} from '@/utils/use-namespace'
	import {buttonStyles} from './theme'
	import type {ButtonProps} from './types'

	const props = withDefaults(defineProps<ButtonProps>(), {
		variant: 'solid',
		color: 'primary',
		size: 'default',
		tag: 'button',
		disabled: false
	})

	const ns = useNamespace('button')
</script>
