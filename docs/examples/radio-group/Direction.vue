<template>
	<UiRadioGroup v-model="model" direction="vertical" :items="items" legend="Legend" />
	<br />
	<UiRadioGroup v-model="model" direction="horizontal" :items="items" legend="Legend" />
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
