<template>
	<div>
		<UiDatePicker v-model:date="date" v-model:hours="hours" v-model:minutes="minutes" v-model:seconds="seconds" mode="date-time" />
	</div>

	<div class="mt-2">Value: {{ date?.format('DD-MM-YYYY') }} {{ hours }} {{ minutes }} {{ seconds }}</div>
</template>

<script lang="ts" setup>
	import {type Dayjs} from '@/components/date-picker'
	import {ref} from 'vue'

	const date = ref<Dayjs | null>(null)
	const hours = ref<number | null>(null)
	const minutes = ref<number | null>(null)
	const seconds = ref<number | null>(null)
</script>
