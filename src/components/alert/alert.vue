<template>
	<UiCollapseTransition>
		<div v-if="modelValue" class="transition-collapse-target">
			<div :class="ui.root({class: $props.overrideUi?.root})">
				<div :class="ui.wrapper({class: $props.overrideUi?.wrapper})">
					<div v-if="$props.title || $slots.title" :class="ui.title({class: $props.overrideUi?.title})">
						<slot name="title">
							{{ $props.title }}
						</slot>
					</div>
					<div v-if="$props.description || $slots.description" :class="ui.description({class: $props.overrideUi?.description})">
						<slot name="description">
							{{ $props.description }}
						</slot>
					</div>

					<Icon
						v-if="$props.closable"
						@click="handleClose"
						:class="ui.close({class: $props.overrideUi?.close})"
						:size="20"
						icon="iconoir:cancel"
					></Icon>
				</div>
			</div>
		</div>
	</UiCollapseTransition>
</template>

<script lang="ts">
	import {tv} from 'tailwind-variants'
	import {ComponentNames} from '@/types/configuration'
	import {computed, defineComponent, type PropType} from 'vue'
	import theme from './theme'
	import Icon from '../icon/Icon.vue'
	import {UiCollapseTransition} from '../transition'

	export default defineComponent({
		name: ComponentNames.Alert,
		components: {Icon, UiCollapseTransition},
		emits: ['update:modelValue'],
		props: {
			variant: {
				type: String as PropType<keyof (typeof theme)['variants']['variant']>,
				default: 'solid'
			},
			color: {
				type: String as PropType<keyof (typeof theme)['variants']['color']>,
				default: 'primary'
			},
			overrideUi: {
				type: Object as PropType<Partial<(typeof theme)['slots']>>,
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
			}
		},
		setup(props) {
			const ui = computed(() => tv({...theme})({color: props.color, variant: props.variant}))

			//const model = defineModel({default: false, type: Boolean})

			return {ui}
		},
		methods: {
			handleClose() {
				this.$emit('update:modelValue', false)
			}
		},
		computed: {
			// multiline() {
			// 	return !!this.title && !!this.description
			// }
		}
	})
</script>

<style lang="scss" scoped></style>
