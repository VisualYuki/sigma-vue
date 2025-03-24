<template>
	<UiCollapseRoot>
		<UiCollapseContent>
			<div class="transition-collapse-target">
				<div :class="[ui.root({class: props.overrideUi?.root}), ns.e('root'), ns.m(props.color as string)]">
					<div :class="ui.wrapper({class: props.overrideUi?.wrapper})">
						<Icon
							v-if="props.withIcon && _computed.colorIcon.value"
							:class="[
								ui.withIcon({
									class: props.overrideUi?.withIcon
								}),
								ns.e('with-icon')
							]"
							size="20"
							:icon="_computed.colorIcon.value"
						></Icon>
						<div :class="ui.content({class: props.overrideUi?.content})">
							<div v-if="props.title || $slots.title" :class="[ui.title({class: props.overrideUi?.title}), ns.e('title')]">
								<slot name="title">
									{{ props.title }}
								</slot>
							</div>
							<div
								v-if="props.description || $slots.description"
								:class="[
									ui.description({
										class: props.overrideUi?.description
									}),
									ns.e('description')
								]"
							>
								<slot name="description">
									{{ props.description }}
								</slot>
							</div>
						</div>

						<UiCollapseTrigger>
							<UiCancelIcon
								v-if="props.closable"
								:class="[ui.close({class: props.overrideUi?.close}), ns.e('close')]"
								@click="methods.handleClose"
							></UiCancelIcon>
						</UiCollapseTrigger>
					</div>
				</div>
			</div>
		</UiCollapseContent>
	</UiCollapseRoot>
</template>

<script lang="ts" setup>
	import {ComponentNames} from '@/types/configuration'
	import {computed, type PropType} from 'vue'
	import {tvInstance} from './theme'
	import {useNamespace} from '@/utils/use-namespace'
	import {UiCancelIcon} from '../icons'

	defineOptions({
		name: ComponentNames.Alert
	})

	const props = defineProps({
		variant: {
			type: String as PropType<keyof (typeof tvInstance)['variants']['variant']>,
			default: 'solid'
		},
		color: {
			type: String as PropType<keyof (typeof tvInstance)['variants']['color']>,
			default: 'primary'
		},
		overrideUi: {
			type: Object as PropType<Partial<(typeof tvInstance)['slots']>>,
			default: () => ({})
		},
		title: {
			type: String,
			default: ''
		},
		description: {
			type: String,
			default: ''
		},
		as: {
			type: String as PropType<keyof HTMLElementTagNameMap>,
			default: 'div'
		},
		closable: {
			type: Boolean,
			default: false
		},
		modelValue: {
			type: Boolean,
			default: true
		},
		center: {
			type: Boolean,
			default: false
		},
		withIcon: {
			type: Boolean,
			default: false
		}
	})

	const emit = defineEmits(['update:modelValue', 'close'])
	const ui = computed(() =>
		tvInstance({
			color: props.color,
			variant: props.variant,
			center: props.center
		})
	)
	const ns = useNamespace('alert')

	const _computed = {
		colorIcon: computed(() => {
			let result: 'mdi:error' | 'mdi:information' | 'mdi:alert' | 'mdi:success-circle' | '' = ''

			switch (props.color) {
				case 'error':
					result = 'mdi:error'
					break
				case 'info':
					result = 'mdi:information'
					break
				case 'warning':
					result = 'mdi:alert'
					break
				case 'success':
					result = 'mdi:success-circle'
					break
			}

			return result
		})
	}

	const methods = {
		handleClose() {
			emit('update:modelValue', false)
			emit('close')
		}
	}
</script>

<style lang="scss" scoped></style>
