<template>
	<div :class="scrollbarStyles.root()" :style="{height: props.height, width: props.width}" :data-name="ns.b()">
		<div ref="content" :class="[scrollbarStyles.content(), 'scroll-width-none']" :data-name="ns.e('content')" @scroll="onScroll($event)">
			<slot></slot>
		</div>
		<Thumb
			ref="xBar"
			:data-name="ns.e('x-thumb')"
			direction="horizontal"
			:content="content"
			:thumb-styles="props.thumbStyles"
			:on-hover="props.onHover"
		/>
		<Thumb
			ref="yBar"
			:data-name="ns.e('y-thumb')"
			direction="vertical"
			:content="content"
			:thumb-styles="props.thumbStyles"
			:on-hover="props.onHover"
		/>
	</div>
</template>

<script lang="ts" setup>
	import {useTemplateRef} from 'vue'

	import {useNamespace} from '@/utils/use-namespace'

	import type {ScrollbarProps} from './types'

	import {scrollbarStyles} from './styles'
	import Thumb from './thumb.vue'

	const props = withDefaults(defineProps<ScrollbarProps>(), {
		height: '100%',
		onHover: false,
		thumbStyles: '',
		width: '100%'
	})

	const xBar = useTemplateRef('xBar')
	const yBar = useTemplateRef('yBar')
	const content = useTemplateRef<HTMLElement | null>('content')
	const ns = useNamespace('scrollbar')

	function onScroll(event: Event) {
		console.log('onScroll', event)
		xBar.value?.moveBar()
		yBar.value?.moveBar()
	}
</script>

<style scoped>
	.scroll-width-none {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Chrome, Safari */
	.scroll-width-none::-webkit-scrollbar {
		width: 0;
		height: 0;
		display: none;
	}
</style>
