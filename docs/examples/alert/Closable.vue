<template>
	<UiButton class="mb-2" @click="modelValue = !modelValue">open alert</UiButton>
	<UiAlert v-model="modelValue" closable>
		<template #title>title</template>
		<template #description>description</template>
	</UiAlert>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const modelValue = ref(false)
</script>
