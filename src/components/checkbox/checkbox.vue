<template>
	<label :class="checkboxStyles.root()" :data-name="ns.b()">
		<input
			v-model="modelValue"
			:class="checkboxStyles.originalInput()"
			:data-name="ns.e('original-input')"
			type="checkbox"
			:disabled="props.disabled"
			:indeterminate="isIndeterminate()"
			@click="handleClick($event)"
		/>
		<div :class="checkboxStyles.fakeInput({checked: modelValue === true})" :data-name="ns.e('fake-input')">
			<template v-if="isIndeterminate()">
				<Icon icon="mdi:minus" :class="[checkboxStyles.icon({isMinusIcon: true})]" />
			</template>
			<template v-else-if="modelValue">
				<Icon icon="mdi:check" :class="[checkboxStyles.icon({isCheckedIcon: true})]" />
			</template>
		</div>
		<Label v-if="props.label" :class="checkboxStyles.label()" dark>
			{{ props.label }}
		</Label>
	</label>
</template>

<script lang="ts" setup>
	import {useNamespace} from '@/utils/use-namespace'

	import type {CheckboxEmits, CheckboxModelValue, CheckboxProps} from './types'

	import {Icon} from '../icon'
	import {Label} from '../label'
	import {checkboxStyles} from './styles'

	const emit = defineEmits<CheckboxEmits>()
	const props = withDefaults(defineProps<CheckboxProps>(), {disabled: false, label: ''})

	const modelValue = defineModel<CheckboxModelValue>({
		default: false,
		get: (v) => {
			if (v === 'indeterminate') {
				return false
			}

			return v
		}
	})

	const ns = useNamespace('checkbox')

	function handleClick(event: MouseEvent) {
		emit('click', event)
	}

	function isIndeterminate() {
		return (props as unknown as {modelValue: CheckboxModelValue}).modelValue === 'indeterminate'
	}
</script>
