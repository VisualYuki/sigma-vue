<template>
	<Accordion v-model="value" accordion>
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
</template>

<script lang="ts" setup>
	import {Accordion, AccordionItem} from './components/accordion'
</script>

<style lang="scss" scoped></style>
