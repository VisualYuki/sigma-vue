<template>
	<UiButton class="mb-2" @click="modelValue = !modelValue">open alert</UiButton>
	<UiAlert v-model="modelValue" closable>
		<template #title>
			<UiLabel color="white">title</UiLabel>
		</template>
		<template #description>
			<UiLabel color="white">description</UiLabel>
		</template>
	</UiAlert>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const modelValue = ref(false)
</script>
