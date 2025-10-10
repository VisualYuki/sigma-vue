<template>
	<fieldset :class="radioGroupStyles.root({direction: props.direction})">
		<legend :class="radioGroupStyles.legend()">{{ props.legend }}</legend>
		<template v-for="radioData in props.items" :key="radioData?.value || radioData">
			<Radio v-model="modelValue" :value="getValue(radioData)" :disabled="getDisabled(radioData)" :label="getLabel(radioData)" />
		</template>
	</fieldset>
</template>

<script lang="ts" setup>
	import type {RadioGroupItem, RadioGroupProps, RadioGroupValue} from './types'

	import Radio from './radio.vue'
	import {radioGroupStyles} from './styles'

	defineOptions({
		inheritAttrs: false
	})

	const props = defineProps<RadioGroupProps>()
	const modelValue = defineModel<RadioGroupValue>({default: ''})

	const getValue = (data: RadioGroupItem) => {
		return data instanceof Object ? data['value'] : data
	}

	const getLabel = (data: RadioGroupItem) => {
		return data instanceof Object ? data['label'] || data['value'].toString() : data
	}

	const getDisabled = (data: RadioGroupItem) => {
		return data instanceof Object ? data['disabled'] || props.disabled || false : props.disabled || false
	}
</script>
