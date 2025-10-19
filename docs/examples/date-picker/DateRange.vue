<template>
	<div>
		<UiDatePicker v-model:start-date="rangePickerStartDate" v-model:end-date="rangePickerEndDate" mode="date-range" />

		<div class="mt-2">
			Value: {{ rangePickerStartDate?.format('DD-MM-YYYY') }} -
			{{ rangePickerEndDate?.format('DD-MM-YYYY') }}
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'
	import {type Dayjs} from '@/components/date-picker'

	const rangePickerStartDate = ref<Dayjs | null>(null)
	const rangePickerEndDate = ref<Dayjs | null>(null)
</script>
