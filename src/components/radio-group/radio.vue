<template>
	<label :class="radioStyles.root()">
		<input v-model="model" :class="radioStyles.originalInput()" type="radio" :value="props.value" :disabled="props.disabled" />
		<div :class="radioStyles.fakeInput({checked: model == props.value})">
			<span v-if="model == props.value" :class="radioStyles.icon()" />
		</div>

		<p v-if="props.label" :class="radioStyles.label()">
			{{ props.label }}
		</p>
	</label>
</template>

<script lang="ts" setup>
	import type {ObjectRadioGroupItem, RadioGroupValue} from './types'

	import {radioStyles} from './styles'

	const props = defineProps<ObjectRadioGroupItem>()
	const model = defineModel<RadioGroupValue>({default: ''})
</script>
