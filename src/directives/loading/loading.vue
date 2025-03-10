<template>
	<div class="bg-white/90 absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col" :class="ns.b()">
		<!-- <LoadingIcon :class="ns.e('icon')"></LoadingIcon> -->
		<Icon icon="svg-spinners:90-ring-with-bg" :size="30"></Icon>
		<p class="text-sm" :class="ns.e('text')">{{ props.loadingText }}</p>
	</div>
</template>

<script lang="ts" setup>
	//import LoadingIcon from '@/icons/LoadingIcon.vue'
	import {useNamespace} from '@/utils/use-namespace'
	import Icon from '@/components/icon/Icon.vue'

	const props = defineProps({
		loadingText: {
			type: String,
			default: 'Loading...'
		}
		// visible: {
		// 	type: Boolean,
		// 	defalt: false
		// }
	})

	const ns = useNamespace('loading-directive')
</script>

<style lang="scss" scoped></style>
