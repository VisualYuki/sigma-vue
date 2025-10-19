<template>
	<div :class="commonStyles.root()">
		<TriggerDropdown v-model="isOpen" height="max">
			<template #trigger>
				<label>
					{{ props.label }}
				</label>
				<div :class="commonStyles.input()">
					<div class="flex items-center gap-2" @click="isOpen = false">
						<template v-if="props.mode === 'date'">
							<DateGroup v-model="date" />
						</template>
						<template v-else-if="props.mode === 'date-range'">
							<DateGroup v-model="startDate" />
							<span class="text-text-secondary">-</span>
							<DateGroup v-model="endDate" />
						</template>

						<template v-else-if="props.mode === 'date-time'">
							<DateGroup v-model="date" />
							<TimeGroup v-model:hours="hours" v-model:minutes="minutes" v-model:seconds="seconds" />
						</template>

						<template v-else-if="props.mode === 'time'">
							<TimeGroup v-model:hours="hours" v-model:minutes="minutes" v-model:seconds="seconds" />
						</template>
						<Button variant="transparent" color="black" size="small" @click.stop="isOpen = true">
							<Icon icon="mdi:calendar-outline" />
						</Button>
					</div>
				</div>
			</template>
			<template #content>
				<DayMenu v-if="props.mode === 'date'" v-model:selected-date="date" select-mode="single" />

				<DayMenu
					v-else-if="props.mode === 'date-range'"
					v-model:start-selected-date="startDate"
					v-model:end-selected-date="endDate"
					select-mode="range"
				/>
				<template v-else-if="props.mode === 'date-time'">
					<div class="flex items-center">
						<DayMenu v-model:selected-date="date" select-mode="single" />
						<TimeMenu v-model:hours="hours" v-model:minutes="minutes" v-model:seconds="seconds" />
					</div>
				</template>

				<template v-else-if="props.mode === 'time'">
					<TimeMenu v-model:hours="hours" v-model:minutes="minutes" v-model:seconds="seconds" />
				</template>
			</template>
		</TriggerDropdown>
	</div>
</template>

<script lang="ts" setup>
	import {ref, watch} from 'vue'

	import {Icon} from '@/components/icon'
	import {TriggerDropdown} from '@/components/trigger-dropdown'

	import DateGroup from './input/date-group.vue'
	import DayMenu from './menu/day-menu.vue'
	import TimeGroup from './input/time-group.vue'
	import TimeMenu from './menu/time-menu.vue'
	import type {BasePickerProps} from './types'
	import {commonStyles} from './styles'
	import {type Dayjs} from './dayjs'
	import {Button} from '../button'

	const isOpen = ref(false)
	const date = defineModel<Dayjs | null>('date', {default: null})

	const startDate = defineModel<Dayjs | null>('startDate', {default: null})
	const endDate = defineModel<Dayjs | null>('endDate', {default: null})

	const hours = defineModel<number | null>('hours', {default: null})
	const minutes = defineModel<number | null>('minutes', {default: null})
	const seconds = defineModel<number | null>('seconds', {default: null})

	const props = withDefaults(defineProps<BasePickerProps>(), {
		label: '',
		mode: 'date'
	})

	watch([startDate, endDate], () => {
		if (startDate.value && endDate.value && startDate.value.isAfter(endDate.value)) {
			const temp = startDate.value
			startDate.value = endDate.value
			endDate.value = temp
		}
	})
</script>
