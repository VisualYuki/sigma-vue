<template>
	<component :is="props.tag" :class="[ui.base({}), ns.b()]" :disabled="props.disabled">
		<slot></slot>
	</component>
</template>

<script lang="ts" setup>
	import {ComponentNames, type TSizes} from '@/types/configuration'
	import {computed, type PropType} from 'vue'
	import {tvInstance} from './theme'
	import {useNamespace} from '@/utils/use-namespace'

	defineOptions({
		name: ComponentNames.Button
	})

	const props = defineProps({
		variant: {
			type: String as PropType<keyof (typeof tvInstance)['variants']['variant']>,
			default: 'solid'
		},
		color: {
			type: String as PropType<keyof (typeof tvInstance)['variants']['color']>,
			default: 'success'
		},
		size: {
			type: String as PropType<TSizes>,
			default: 'default'
		},
		tag: {
			type: String as PropType<keyof HTMLElementTagNameMap | 'RouterLink'>,
			default: 'button'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	})

	const ui = computed(() =>
		tvInstance({
			color: props.color,
			variant: props.variant,
			size: props.size
		})
	)
	const ns = useNamespace('button')
</script>

<style lang="scss" scoped></style>
