<template>
	<Transition ref="col-ref" v-on="on">
		<slot></slot>
	</Transition>
</template>

<script lang="ts" setup>
	import type {RendererElement} from 'vue'

	const on = {
		afterEnter(el: RendererElement) {
			el.style.height = ''
		},
		afterLeave(el: RendererElement) {
			el.style.height = ''
		},
		beforeEnter(el: RendererElement) {
			el.style.height = '0'
		},
		beforeLeave(el: RendererElement) {
			el.style.height = `${el.scrollHeight}px`
		},
		enter(el: RendererElement) {
			el.style.height = `${el.scrollHeight}px`
		},
		leave(el: RendererElement) {
			el.style.height = '0'
		}
	}
</script>
