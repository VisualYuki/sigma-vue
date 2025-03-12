<template>
	<IconifyIcon v-bind="$props" :style="{'font-size': $props.size + 'px'}"></IconifyIcon>
</template>

<script lang="ts">
	import {ComponentNames} from '@/types/configuration'
	import {Icon as IconifyIcon, type IconProps} from '@iconify/vue'
	import {defineComponent, type PropType} from 'vue'

	type sizes = 10 | 15 | 20 | 30 | 40 | 50
	type Icon =
		| 'iconoir:cancel'
		| 'svg-spinners:90-ring-with-bg'
		| 'mdi:alert'
		| 'mdi:information'
		| 'mdi:error'
		| 'mdi:success-circle'
		| 'ph:image-duotone'

	export default defineComponent<IconProps & {size: sizes; icon: Icon}>({
		name: ComponentNames.Icon,
		components: {IconifyIcon},
		props: {
			size: {
				type: Number as PropType<sizes>,
				required: true
			},
			icon: {
				type: String as PropType<Icon>,
				required: true
			}
		}
	})
</script>

<style lang="scss" scoped></style>
