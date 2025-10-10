<template>
	<UiRadioGroup v-model="model" :items="items" legend="Legend" />
	<br />
	<div>model: {{ model }}</div>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	import {type ObjectRadioGroupItem, type RadioGroupValue} from '@/components/radio-group'

	const items = ref<ObjectRadioGroupItem[]>([
		{label: 'label 1', value: 'value 1'},
		{label: 'label 2', value: 'value 2'}
	])

	const model = ref<RadioGroupValue>()
</script>
