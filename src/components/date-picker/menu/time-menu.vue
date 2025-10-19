<template>
	<div :class="timeMenuStyles.root()">
		<p :class="timeMenuStyles.selectedTime()">
			{{ hours !== null ? formatWithLeadingZero(hours.toString()) : 'hh' }} :
			{{ minutes !== null ? formatWithLeadingZero(minutes.toString()) : 'mm' }} :
			{{ seconds !== null ? formatWithLeadingZero(seconds.toString()) : 'ss' }}
		</p>
		<div :class="timeMenuStyles.columnsWrap()">
			<div :class="timeMenuStyles.column()" :data-name="`hours-column-${id}`">
				<template v-for="(_, idx) in 24" :key="idx">
					<div
						ref="hoursRefs"
						:class="[timeMenuStyles.columnItem(), commonMenuStyles.item({isPrimary: idx === hours})]"
						:data-hours="idx"
						:data-state="idx === hours ? 'selected' : 'unselected'"
						@click="hours = idx"
					>
						{{ formatWithLeadingZero(idx.toString()) }}
					</div>
				</template>
			</div>

			<div :class="timeMenuStyles.column()" :data-name="`minutes-column-${id}`">
				<template v-for="(_, idx) in 60" :key="idx">
					<div
						ref="minutesRefs"
						:class="[timeMenuStyles.columnItem(), commonMenuStyles.item({isPrimary: idx === minutes})]"
						:data-minutes="idx"
						:data-state="idx === minutes ? 'selected' : 'unselected'"
						@click="minutes = idx"
					>
						{{ formatWithLeadingZero(idx.toString()) }}
					</div>
				</template>
			</div>

			<div :class="timeMenuStyles.column()" :data-name="`seconds-column-${id}`">
				<template v-for="(_, idx) in 60" :key="idx">
					<div
						ref="secondsRefs"
						:class="[timeMenuStyles.columnItem(), commonMenuStyles.item({isPrimary: idx === seconds})]"
						:data-seconds="idx"
						:data-state="idx === seconds ? 'selected' : 'unselected'"
						@click="seconds = idx"
					>
						{{ formatWithLeadingZero(idx.toString()) }}
					</div>
				</template>
			</div>
		</div>
		<div :class="timeMenuStyles.buttonsWrap()">
			<Button variant="outline" size="small" @click="setNow()">Today</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {onMounted, ref, type Ref, useId, nextTick} from 'vue'

	import {Button} from '@/components/button'

	import {commonMenuStyles, timeMenuStyles} from '../styles'
	import {formatWithLeadingZero} from '../utils'
	import {dayjs} from '../dayjs'

	const hours = defineModel<number | null>('hours', {default: null})
	const minutes = defineModel<number | null>('minutes', {default: null})
	const seconds = defineModel<number | null>('seconds', {default: null})

	const hoursRefs = ref<HTMLElement[]>([])
	const minutesRefs = ref<HTMLElement[]>([])
	const secondsRefs = ref<HTMLElement[]>([])
	const id = useId()

	function scrollToSelected(ref: Ref<HTMLElement[]>, value: number) {
		ref.value?.[value]?.scrollIntoView({behavior: 'auto', block: 'nearest'})
	}

	onMounted(() => {
		if (hours.value) {
			scrollToSelected(hoursRefs, hours.value)
		}
		if (minutes.value) {
			scrollToSelected(minutesRefs, minutes.value)
		}
		if (seconds.value) {
			scrollToSelected(secondsRefs, seconds.value)
		}
	})

	async function setNow() {
		const now = dayjs()

		hours.value = now.hour()
		minutes.value = now.minute()
		seconds.value = now.second()

		await nextTick()

		scrollToSelected(hoursRefs, hours.value)
		scrollToSelected(minutesRefs, minutes.value)
		scrollToSelected(secondsRefs, seconds.value)
	}
</script>
