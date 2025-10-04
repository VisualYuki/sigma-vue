<template>
	<div
		ref="bar"
		:class="thumbStyles.root({orientation: props.direction, hidden: !hasScroll})"
		tabindex="0"
		:style="props.thumbStyles"
		@mousedown="onMouseDown"
	></div>
</template>

<script lang="ts" setup>
	import {nextTick, onMounted, ref, useTemplateRef} from 'vue'

	import {useDocumentMouseListener} from './composables/useDocumentMouseListener'
	import {useDocumentResizeListener} from './composables/useDocumentResizeListener'
	import {thumbStyles} from './styles'
	import {type ScrollbarThumbProps} from './types'

	const props = withDefaults(defineProps<ScrollbarThumbProps>(), {
		content: null,
		direction: 'vertical',
		thumbStyles: ''
	})

	const documentMouseListener = useDocumentMouseListener(onMouseMove, onMouseUp)
	useDocumentResizeListener(moveBar)

	const bar = useTemplateRef<HTMLElement | null>('bar')
	const startPage = ref<number>(0)
	const startScrollPosition = ref<number>(0)
	const isBarClicked = ref(false)
	const barRatio = ref<null | number>(null)
	const barHeight = ref<null | number>(null)
	const hasScroll = ref<boolean>(false)

	function moveBar() {
		if (props.content === null) return

		if (props.direction === 'horizontal') {
			barRatio.value = props.content.clientWidth / props.content.scrollWidth
			barHeight.value = barRatio.value * props.content.clientWidth
		} else if (props.direction === 'vertical') {
			barRatio.value = props.content.clientHeight / props.content.scrollHeight
			barHeight.value = barRatio.value * props.content.clientHeight
		}

		if (barRatio.value === 1 || barHeight.value === 0) {
			hasScroll.value = false
			return
		} else {
			hasScroll.value = true
		}

		requestAnimationFrame(() => {
			if (bar.value && barRatio.value !== null && props.content !== null) {
				if (props.direction === 'horizontal') {
					bar.value.style.left = `${props.content.scrollLeft * barRatio.value}px`
					bar.value.style.width = `${barHeight.value}px`
				} else if (props.direction === 'vertical') {
					bar.value.style.top = `${props.content.scrollTop * barRatio.value}px`
					bar.value.style.height = `${barHeight.value}px`
				}
			}
		})
	}

	function onMouseDown(event: MouseEvent) {
		if (props.direction === 'horizontal') {
			startPage.value = event.pageX
			startScrollPosition.value = props.content?.scrollLeft || 0
		} else if (props.direction === 'vertical') {
			startPage.value = event.pageY
			startScrollPosition.value = props.content?.scrollTop || 0
		}

		document.body.classList.add('select-none')

		isBarClicked.value = true
		documentMouseListener.bindDocumentMouseListener()
	}

	function onMouseMove(event: MouseEvent) {
		setThumbScrollPosition(event)
		moveBar()
	}

	function onMouseUp() {
		isBarClicked.value = false
	}

	function requestAnimationFrame(fn: () => void) {
		return window.requestAnimationFrame ? window.requestAnimationFrame(fn) : setTimeout(fn, 0)
	}

	function setThumbScrollPosition(event: MouseEvent) {
		if (isBarClicked.value === false || bar.value === null || barRatio.value === null) {
			return
		}

		let delta = 0

		if (props.direction === 'horizontal') {
			delta = startPage.value - event.pageX
		} else if (props.direction === 'vertical') {
			delta = startPage.value - event.pageY
		}

		const scrollOffset = (delta * -1) / barRatio.value

		requestAnimationFrame(() => {
			if (props.content === null) return

			if (props.direction === 'horizontal') {
				// eslint-disable-next-line vue/no-mutating-props
				props.content.scrollLeft = startScrollPosition.value + scrollOffset
			} else if (props.direction === 'vertical') {
				// eslint-disable-next-line vue/no-mutating-props
				props.content.scrollTop = startScrollPosition.value + scrollOffset
			}
		})
	}

	onMounted(() => {
		nextTick(() => {
			moveBar()
		})
	})

	defineExpose({
		moveBar
	})
</script>

<style lang="scss" scoped></style>
