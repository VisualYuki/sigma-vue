<template>
	<Story title="Accordion" :layout="{type: 'single', iframe: true}">
		<Variant title="default">
			<Accordion v-model="value" :accordion="isAccordion">
				<AccordionItem name="1">
					<template #trigger>trigger 1</template>
					<template #content>content 1</template>
				</AccordionItem>
				<AccordionItem name="2">
					<template #trigger>trigger 2</template>
					<template #content>content 2</template>
				</AccordionItem>
				<AccordionItem name="3">
					<template #trigger>trigger 3</template>
					<template #content>content 3</template>
				</AccordionItem>
			</Accordion>
		</Variant>
	</Story>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'
	import {Accordion, AccordionItem} from '../'

	const value = ref<string[]>([])
	const isAccordion = ref<boolean>(true)
</script>
