<template>
	<UiCheckbox v-model="value" />
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	import type {CheckboxModelValue} from '@/components/checkbox/types'

	const value = ref<CheckboxModelValue>('indeterminate')
</script>
