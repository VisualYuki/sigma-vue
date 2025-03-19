<template>
	<div
		class="bg-white/90 absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col"
		:class="[props.customClass, ns.b()]"
		:style="{background: props.background}"
	>
		<!-- <LoadingIcon :class="ns.e('icon')"></LoadingIcon> -->
		<Icon icon="svg-spinners:90-ring-with-bg" size="30"></Icon>
		<p class="text-sm" :class="ns.e('text')">{{ props.text }}</p>
	</div>
</template>

<script lang="ts" setup>
	import {useNamespace} from '@/utils/use-namespace'
	import Icon from '@/components/icon/Icon.vue'

	const props = defineProps({
		text: {
			type: String,
			default: 'Loading...'
		},
		background: {
			type: String,
			default: ''
		},
		customClass: {
			type: String,
			default: ''
		}
	})

	const ns = useNamespace('loading-directive')
</script>

<style lang="scss" scoped></style>
