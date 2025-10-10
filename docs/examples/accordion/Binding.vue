<template>
	<div class="flex gap-2 mb-2">
		<UiButton :variant="value.includes('1') ? 'solid' : 'outline'" @click="value = ['1']">1</UiButton>
		<UiButton :variant="value.includes('2') ? 'solid' : 'outline'" @click="value = ['2']">2</UiButton>
		<UiButton :variant="value.includes('3') ? 'solid' : 'outline'" @click="value = ['3']">3</UiButton>
	</div>

	<UiAccordion v-model="value">
		<UiAccordionItem name="1">
			<template #trigger>
				<UiLabel color="white">trigger 1</UiLabel>
			</template>
			<template #content>
				<UiLabel color="white">content 1</UiLabel>
			</template>
		</UiAccordionItem>
		<UiAccordionItem name="2">
			<template #trigger>
				<UiLabel color="white">trigger 2</UiLabel>
			</template>
			<template #content>
				<UiLabel color="white">content 2</UiLabel>
			</template>
		</UiAccordionItem>
		<UiAccordionItem name="3">
			<template #trigger>
				<UiLabel color="white">trigger 3</UiLabel>
			</template>
			<template #content>
				<UiLabel color="white">content 3</UiLabel>
			</template>
		</UiAccordionItem>
	</UiAccordion>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(['1'])
</script>
