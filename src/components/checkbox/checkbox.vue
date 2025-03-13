<template>
	<div :class="ui.root({class: $props.overrideUi?.root})" @click="toggleState()">
		<div :class="ui.checkbox({class: $props.overrideUi?.checkbox})">
			<template v-if="$props.modelValue">
				<Icon icon="mdi:check" color="var(--color-white)" size="20"></Icon>
			</template>
		</div>
		<div v-if="$props.label || $slots.label" :class="ui.label({class: $props.overrideUi?.label})">
			<slot name="label">{{ $props.label }}</slot>
		</div>
	</div>
</template>

<script lang="ts">
	import {ComponentNames, type TSizes} from '@/types/configuration'
	import {computed, defineComponent, type PropType} from 'vue'
	import {tvInstance} from './theme'
	import Icon from '../icon/Icon.vue'

	export default defineComponent({
		name: ComponentNames.Checkbox,
		components: {
			Icon
		},
		props: {
			modelValue: {
				type: Boolean,
				default: false
			},
			overrideUi: {
				type: Object as PropType<Partial<typeof tvInstance>['slots']>,
				default: () => ({})
			},
			size: {
				type: String as PropType<TSizes>,
				default: 'default'
			},
			label: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		emits: ['update:modelValue', 'change'],
		setup(props) {
			const ui = computed(() => tvInstance({checked: props.modelValue, size: props.size, disabled: props.disabled}))

			return {ui}
		},
		methods: {
			toggleState() {
				this.$emit('change', !this.modelValue)
				this.$emit('update:modelValue', !this.modelValue)
			}
		}
	})
</script>

<style lang="scss" scoped></style>
