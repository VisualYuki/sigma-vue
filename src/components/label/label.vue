<template>
	<component
		:is="props.as"
		:class="labelStyles.root({size: props.size, weight: props.weight, color: props.color, dark: props.dark})"
		:data-name="ns.b()"
	>
		<slot />
	</component>
</template>

<script lang="ts" setup>
	import {useNamespace} from '@/utils/use-namespace'

	import type {LabelProps} from './types'

	import {labelStyles} from './styles'

	const props = withDefaults(defineProps<LabelProps>(), {as: 'span', color: 'black', dark: false, size: 'md', weight: 'normal'})

	const ns = useNamespace('label')
</script>
