<template>
	<div>
		<UiDatePicker v-model:date="datePickerDate" mode="date" />
		<div class="mt-2">Value: {{ datePickerDate?.format('DD-MM-YYYY') }}</div>
	</div>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	import {type Dayjs} from '@/components/date-picker'

	const datePickerDate = ref<Dayjs | null>(null)
</script>
