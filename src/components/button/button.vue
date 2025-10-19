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
	import {useNamespace} from '@/utils'

	import type {ButtonProps} from './types'

	import {buttonStyles} from './styles'

	const props = withDefaults(defineProps<ButtonProps>(), {
		color: 'primary',
		disabled: false,
		size: 'default',
		tag: 'button',
		variant: 'solid'
	})

	const ns = useNamespace('button')
</script>
