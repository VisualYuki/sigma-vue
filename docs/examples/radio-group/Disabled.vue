<template>
	<UiRadioGroup :items="items1" legend="Legend" />
	<br />
	<UiRadioGroup disabled :items="items2" legend="Legend" />
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	import {type ObjectRadioGroupItem} from '@/components/radio-group'

	const items1 = ref<ObjectRadioGroupItem[]>([
		{label: 'label 1', value: 'value 1'},
		{disabled: true, label: 'label 2', value: 'value 2'}
	])

	const items2 = ref<ObjectRadioGroupItem[]>([
		{label: 'label 1', value: 'value 1'},
		{label: 'label 2', value: 'value 2'}
	])
</script>
