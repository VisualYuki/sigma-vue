<template>
	<div :class="dayMenuStyles.root()">
		<div :class="dayMenuStyles.header()">
			<Button variant="outline" size="small" @click="setPrevMonth()">
				<Icon icon="mdi:chevron-left" />
			</Button>
			<p :class="dayMenuStyles.monthText()">{{ displayDate.format('MMMM YYYY') }}</p>
			<Button variant="outline" size="small" @click="setNextMonth()">
				<Icon icon="mdi:chevron-right" />
			</Button>
		</div>
		<div :class="dayMenuStyles.grid()">
			<div :class="dayMenuStyles.gridHeader()">
				<div v-for="item in WEEK_DAYS" :key="item">
					{{ item }}
				</div>
			</div>

			<div :class="dayMenuStyles.gridItems()">
				<div
					v-for="num in beginningMonthWeekDayIndex"
					:key="num"
					:class="[dayMenuStyles.gridItem({isCurrentMonthDay: false}), commonMenuStyles.item()]"
					@click="setPrevMonth()"
				>
					{{ prevMonthDays - beginningMonthWeekDayIndex + num }}
				</div>
				<div
					v-for="num in monthDays"
					:key="num"
					:class="[
						dayMenuStyles.gridItem({
							isCurrentMonthDay: true,
							inRange: inRange(num)
						}),
						commonMenuStyles.item({isPrimary: isSelectedDay(num)})
					]"
					:data-day="num"
					:data-state="isSelectedDay(num) ? 'selected' : inRange(num) ? 'in-range' : 'unselected'"
					@click="handleDayClick(num)"
				>
					{{ num }}
				</div>
				<div
					v-for="num in restDays"
					:key="num"
					:class="[dayMenuStyles.gridItem({isCurrentMonthDay: false}), commonMenuStyles.item()]"
					@click="setNextMonth()"
				>
					{{ num }}
				</div>
			</div>
		</div>

		<div v-if="props.selectMode === 'single'" :class="dayMenuStyles.buttonsWrap()">
			<Button variant="outline" size="small" @click="setNow()">Today</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {computed, onMounted, ref} from 'vue'

	import {dayjs, type Dayjs} from '../dayjs'

	//import Button from '@/components/button/Button.vue';
	//import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icon';
	import {Icon} from '@/components/icon'
	import {Button} from '@/components/button'

	import {commonMenuStyles, dayMenuStyles} from '../styles'

	const props = withDefaults(defineProps<{selectMode?: 'single' | 'range'}>(), {
		selectMode: 'single'
	})

	const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
	const CELL_COUNT = 7 * 6

	const displayDate = ref(dayjs().startOf('day'))

	const selectedDate = defineModel<Dayjs | null>('selectedDate', {default: null})
	const startSelectedDate = defineModel<Dayjs | null>('startSelectedDate', {default: null})
	const endSelectedDate = defineModel<Dayjs | null>('endSelectedDate', {default: null})

	const prevMonthDays = computed(() => displayDate.value.subtract(1, 'month').daysInMonth())
	const monthDays = computed(() => displayDate.value.daysInMonth())

	const beginningMonthWeekDayIndex = computed(() => {
		return displayDate.value.startOf('month').weekday()
	})

	const restDays = computed(() => {
		return CELL_COUNT - beginningMonthWeekDayIndex.value - monthDays.value
	})

	function setPrevMonth() {
		displayDate.value = displayDate.value.subtract(1, 'month')
	}

	function setNextMonth() {
		displayDate.value = displayDate.value.add(1, 'month')
	}

	function setNow() {
		selectedDate.value = displayDate.value = dayjs()
	}

	// watch(selectedDate, (value) => {
	//   if (value) {
	//     displayDate.value = value.clone();
	//   }
	// });

	// function setNextYear() {
	//   displayDate.value = displayDate.value.add(1, 'year');
	// }

	// function setPrevYear() {
	//   displayDate.value = displayDate.value.subtract(1, 'year');
	// }

	function isSelectedDay(monthDay: number) {
		function compare(comparedDate: Dayjs) {
			return (
				displayDate.value.year() === comparedDate.year() && displayDate.value.month() === comparedDate.month() && monthDay === comparedDate.date()
			)
		}

		if (props.selectMode === 'single') {
			return !!(selectedDate.value && compare(selectedDate.value))
		} else if (props.selectMode === 'range') {
			return !!((startSelectedDate.value && compare(startSelectedDate.value)) || (endSelectedDate.value && compare(endSelectedDate.value)))
		}

		return false
	}

	function handleDayClick(num: number) {
		if (props.selectMode === 'single') {
			selectedDate.value = displayDate.value.date(num)
		} else if (props.selectMode === 'range') {
			if (!startSelectedDate.value || (startSelectedDate.value && endSelectedDate.value)) {
				startSelectedDate.value = displayDate.value.date(num)
				endSelectedDate.value = null
			} else if (!endSelectedDate.value) {
				if (displayDate.value.date(num).isAfter(startSelectedDate.value)) {
					endSelectedDate.value = displayDate.value.date(num)
				} else {
					endSelectedDate.value = startSelectedDate.value
					startSelectedDate.value = displayDate.value.date(num)
				}
			}
		}
	}

	function inRange(num: number) {
		if (props.selectMode === 'range') {
			if (startSelectedDate.value?.isBefore(displayDate.value.date(num)) && endSelectedDate.value?.isAfter(displayDate.value.date(num))) {
				return true
			}
		}

		return false
	}

	onMounted(() => {
		if (selectedDate.value) {
			displayDate.value = selectedDate.value.clone()
		}
	})
</script>
