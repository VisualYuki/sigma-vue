<template>
	<div class="flex gap-2 mb-2">
		<UiButton :variant="value.includes('1') ? 'solid' : 'outline'" @click="value = ['1']">1</UiButton>
		<UiButton :variant="value.includes('2') ? 'solid' : 'outline'" @click="value = ['2']">2</UiButton>
		<UiButton :variant="value.includes('3') ? 'solid' : 'outline'" @click="value = ['3']">3</UiButton>
	</div>

	<UiAccordion v-model="value">
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
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(['1'])
</script>
