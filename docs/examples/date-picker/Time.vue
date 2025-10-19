<template>
	<div>
		<UiDatePicker v-model:hours="hours" v-model:minutes="minutes" v-model:seconds="seconds" mode="time" />
	</div>

	<div class="mt-2">Value: {{ hours }} {{ minutes }} {{ seconds }}</div>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const hours = ref<number | null>(null)
	const minutes = ref<number | null>(null)
	const seconds = ref<number | null>(null)
</script>
