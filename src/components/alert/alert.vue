<template>
	<UiCollapseTransition>
		<div v-if="modelValue" class="transition-collapse-target">
			<div :class="[ui.root({class: $props.overrideUi?.root}), ns.e('root'), ns.m($props.color as string)]">
				<div :class="ui.wrapper({class: $props.overrideUi?.wrapper})">
					<Icon
						v-if="$props.withIcon && colorIcon"
						:class="[ui.withIcon({class: $props.overrideUi?.withIcon}), ns.e('with-icon')]"
						:size="20"
						:icon="colorIcon"
					></Icon>
					<div :class="ui.content({class: $props.overrideUi?.content})">
						<div v-if="$props.title || $slots.title" :class="[ui.title({class: $props.overrideUi?.title}), ns.e('title')]">
							<slot name="title">
								{{ $props.title }}
							</slot>
						</div>
						<div
							v-if="$props.description || $slots.description"
							:class="[ui.description({class: $props.overrideUi?.description}), ns.e('description')]"
						>
							<slot name="description">
								{{ $props.description }}
							</slot>
						</div>
					</div>

					<Icon
						v-if="$props.closable"
						:class="[ui.close({class: $props.overrideUi?.close}), ns.e('close')]"
						:size="20"
						icon="iconoir:cancel"
						@click="handleClose"
					></Icon>
				</div>
			</div>
		</div>
	</UiCollapseTransition>
</template>

<script lang="ts">
	import {ComponentNames} from '@/types/configuration'
	import {computed, defineComponent, type PropType} from 'vue'
	import {tvInstance} from './theme'
	import Icon from '../icon/Icon.vue'
	import {UiCollapseTransition} from '../transition'
	import {useNamespace} from '@/utils/use-namespace'

	export default defineComponent({
		name: ComponentNames.Alert,
		components: {Icon, UiCollapseTransition},
		props: {
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
		},
		emits: ['update:modelValue', 'close'],
		setup(props) {
			const ui = computed(() => tvInstance({color: props.color, variant: props.variant, center: props.center}))
			const ns = useNamespace('alert')

			return {ui, ns}
		},
		computed: {
			colorIcon() {
				let result: 'mdi:error' | 'mdi:information' | 'mdi:alert' | 'mdi:success-circle' | '' = ''

				switch (this.color) {
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
			}
			// multiline() {
			// 	return !!this.title && !!this.description
			// }
		},
		methods: {
			handleClose() {
				this.$emit('update:modelValue', false)
				this.$emit('close')
			}
		}
	})
</script>

<style lang="scss" scoped></style>
