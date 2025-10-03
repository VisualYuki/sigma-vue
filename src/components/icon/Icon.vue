<template>
	<IconifyIcon v-bind="props" :style="{'font-size': props.size + 'px'}"></IconifyIcon>
</template>

<script lang="ts" setup>
	import {ComponentNames} from '@/types/configuration'
	import {Icon as IconifyIcon, type IconProps} from '@iconify/vue'

	type sizes = '10' | '15' | '20' | '30' | '40' | '50' | ''
	type Icon =
		| 'iconoir:cancel'
		| 'svg-spinners:90-ring-with-bg'
		| 'mdi:alert'
		| 'mdi:information'
		| 'mdi:error'
		| 'mdi:success-circle'
		| 'ph:image-duotone'
		| 'mdi:check'
		| 'line-md:chevron-down'
		| 'mdi:close'

	defineOptions({
		name: ComponentNames.Icon
	})

	const props = defineProps<IconProps & {size?: sizes; icon: Icon}>()
</script>

<style lang="scss" scoped></style>
