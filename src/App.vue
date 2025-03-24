<template>
	<UiAccordion :accordion="true">
		<UiAccordionItem name="1">
			<template #trigger>trigger 1</template>

			<template #content>content 1</template>
		</UiAccordionItem>
		<UiAccordionItem name="2">
			<template #trigger>trigger 2</template>

			<template #content>content 2</template>
		</UiAccordionItem>

		<UiAccordionItem name="3">
			<template #trigger>trigger 3</template>

			<template #content>content 3</template>
		</UiAccordionItem>
	</UiAccordion>

	<UiModal v-model="open">content</UiModal>

	<button @click="open = !open">toggle</button>

	<!-- <div ref="accordion-ref" v-loading="isLoading" ui-text="my custom text">df df</div>
	<button @click="isLoading = !isLoading">toggle</button> -->
</template>

<script lang="ts" setup>
	//import {ref} from 'vue'
	import {onMounted, ref, useTemplateRef} from 'vue'
	//import {UiAccordionItem} from './components/accordion'

	//const accordionRef = useTemplateRef('accordion-ref')

	const text = ref('custom text')
	const background = ref('red')

	const customClass = ref('custom-class')

	const isLoading = ref(false)

	const open = ref(false)

	// setInterval(() => {
	// 	isLoading.value = false
	// }, 500)

	// setInterval(() => {
	// 	isLoading.value = true
	// }, 1500)

	// onMounted(() => {
	// 	setTimeout(() => {
	// 		const loadingPluginInstance = loadingPlugin({
	// 			target: accordionRef.value as HTMLDivElement,
	// 			isFullscreen: true,
	// 			text,
	// 			background,
	// 			lock: true,
	// 			customClass
	// 		})

	// 		setTimeout(() => {
	// 			//isBody.value = false
	// 			//loadingPluginInstance.close()
	// 			text.value = 'new custom text'
	// 			customClass.value = 'new-custom-class'
	// 		}, 1000)
	// 	}, 1000)
	// })
</script>

<style lang="scss" scoped></style>
