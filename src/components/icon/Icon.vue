<template>
	<IconifyIcon v-bind="props" :style="{'font-size': props.size + 'px'}"></IconifyIcon>
</template>

<script lang="ts" setup>
	import {Icon as IconifyIcon, type IconProps} from '@iconify/vue'

	type Icon =
		| 'iconoir:cancel'
		| 'line-md:chevron-down'
		| 'mdi:alert'
		| 'mdi:check'
		| 'mdi:close'
		| 'mdi:error'
		| 'mdi:information'
		| 'mdi:minus'
		| 'mdi:success-circle'
		| 'ph:image-duotone'
		| 'svg-spinners:90-ring-with-bg'
		| 'mdi:chevron-left'
		| 'mdi:chevron-right'
		| 'mdi:calendar-outline'
	type sizes = '' | '10' | '15' | '20' | '30' | '40' | '50'

	const props = defineProps<{icon: Icon; size?: sizes} & IconProps>()
</script>
