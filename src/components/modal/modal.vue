<template>
	<UiTeleport :to="props.teleportTo" :disabled="props.teleportDisabled">
		<Transition
			v-bind="{enterActiveClass: 'opacity-0', enterToClass: 'opacity-100', leaveActiveClass: 'opacity-0'}"
			@before-enter="methods.onBeforeEnter"
			@enter="methods.onEnter"
			@after-enter="methods.onAfterEnter"
			@before-leave="methods.onBeforeLeave"
			@after-leave="methods.onAfterLeave"
		>
			<UiOverlay v-show="model" @click="methods.close('backdrop')">
				<div :id="id" ref="element" v-bind="$attrs" role="dialog" :class="[ns.b(), props.modalClasses, ui.base()]">
					<div v-if="state.ifModalContent" style="z-index: 1060" :class="[ns.e('wrapper')]">
						<div :class="ns.e('content')">
							<div :class="[ns.e('header'), ui.header()]">
								<div :class="[ns.e('header-slot'), ui.headerSlot()]">
									<slot name="header"></slot>
								</div>
								<UiButton :class="[ns.e('close')]" @click="methods.close('close')">
									<UiCancelIcon></UiCancelIcon>
								</UiButton>
							</div>
							<div :class="ns.e('body')">
								<slot name="default"></slot>
							</div>
							<div :class="ns.e('footer')">
								<slot name="footer"></slot>
							</div>
						</div>
					</div>
				</div>
			</UiOverlay>
		</Transition>
	</UiTeleport>
</template>

<script lang="ts" setup>
	import {useId} from 'vue'
	import type {PropType} from 'vue'
	import {reactive} from 'vue'
	import {computed} from 'vue'
	import {onKeyStroke} from '@vueuse/core'
	import {ref} from 'vue'
	import {useNamespace} from '@/utils/use-namespace'
	import {ComponentNames, type TSizes} from '@/types/configuration'
	import {tvInstance} from './theme'
	import {UiCancelIcon} from '../icons'
	import {UiTeleport} from '../teleport'
	import {UiOverlay} from '../overlay'
	import {UiButton} from '../button'

	defineOptions({
		name: ComponentNames.Modal
	})

	const props = defineProps({
		teleportTo: {
			type: String,
			default: undefined
		},
		teleportDisabled: {
			type: Boolean,
			default: false
		},
		id: {
			type: String,
			default: undefined
		},
		modalClasses: {
			type: [Array, String, Object],
			default: undefined
		},
		closeOnBackdrop: {
			type: Boolean,
			default: true
		},
		closeOnEscape: {
			type: Boolean,
			default: true
		},
		fullscreen: {
			type: [Boolean],
			default: false
		},
		size: {
			type: String as PropType<TSizes>,
			default: 'default'
		},
		center: {
			type: Boolean,
			default: false
		},
		beforeClose: {
			type: Function,
			default: undefined
		},
		destroyAfterClose: {
			type: Boolean,
			default: false
		}
	})
	const emit = defineEmits(['update:modelValue', 'hide-prevented', 'backdrop', 'esc', 'start-open', 'opened', 'closed', 'start-close'])

	const ns = useNamespace('modal')
	const ui = computed(() => tvInstance({center: props.center, fullscreen: props.fullscreen, size: props.size}))

	const state = reactive({
		ifModalContent: true
	})
	const element = ref()
	const model = defineModel({
		type: Boolean,
		default: false
	})
	const id = computed(() => (props.id ? props.id : useId()))

	const methods = {
		onEnter() {},
		onBeforeEnter() {
			emit('start-open')
		},
		onAfterEnter() {
			emit('opened')
			methods.beforeOpen()
		},
		onBeforeLeave() {
			emit('start-close')
		},
		onAfterLeave() {
			emit('closed')
		},
		beforeOpen() {
			methods.open()
		},
		open() {
			model.value = true
			state.ifModalContent = true
		},
		close(trigger: 'ok' | 'backdrop' | 'esc' | 'close' | 'hidden' | '' = '') {
			if ((trigger === 'backdrop' && !props.closeOnBackdrop) || (trigger === 'esc' && !props.closeOnEscape)) {
				emit('hide-prevented')
				return
			}

			if (props.destroyAfterClose) {
				state.ifModalContent = false
			}

			if (trigger === 'backdrop') {
				emit(trigger)
			}

			if (trigger === 'esc') {
				emit(trigger)
			}

			if (props.beforeClose) {
				emit('hide-prevented')
				props.beforeClose?.(methods.doClose)
				return
			}

			methods.doClose()
		},
		doClose() {
			model.value = false
		}
	}

	function setup() {
		onKeyStroke(
			'Escape',
			() => {
				methods.close('esc')
			},
			{target: element}
		)
	}

	setup()

	defineExpose({
		close: methods.close,
		open: methods.open,
		id: id.value
	})
</script>

<style scoped></style>
