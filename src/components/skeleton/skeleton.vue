<template>
	<div :class="[ui.root({class: $props.overrideUi?.root})]">
		<slot name="default">
			<template v-if="$props.type === 'image'">
				<UiIcon icon="ph:image-duotone" color="var(--color-neutral-400)" size="40"></UiIcon>
			</template>
		</slot>
	</div>
</template>

<script lang="ts" setup>
	import {ComponentNames} from '@/types/configuration'
	import {computed, type PropType} from 'vue'
	import {tvInstance} from './theme'
	import type {Types} from './utils'
	import {UiIcon} from '../icon'

	defineOptions({
		name: ComponentNames.Skeleton
	})

	const props = defineProps({
		type: {
			type: String as PropType<Types>,
			default: 'text'
		},
		animated: {
			type: Boolean,
			default: false
		},
		overrideUi: {
			type: Object as PropType<Partial<(typeof tvInstance)['slots']>>,
			default: () => ({})
		}
	})

	const ui = computed(() => tvInstance({animated: props.animated, type: props.type}))
</script>

<style lang="scss" scoped></style>
