<template>
	<UiAccordion :accordion="true">
		<UiAccordionItem name="1">
			<template #trigger>trigger 1</template>
			fg
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
</template>

<script lang="ts" setup>
	//import {ref} from 'vue'
	import {UiAccordion, UiAccordionItem} from './components/accordion'
	//import {UiCollapseContent, UiCollapseRoot, UiCollapseTrigger} from './components/collapse'

	//const accordionValue = ref([])

	// setTimeout(() => {
	// 	accordionValue.value = ['1', '2']
	// }, 2000)
</script>

<style lang="scss" scoped></style>
