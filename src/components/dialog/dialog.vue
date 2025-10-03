<template>
	<Teleport v-if="modelValue" :to="props.teleportTo" :disabled="props.teleportDisabled">
		<dialog v-bind="$attrs" ref="dialogRef" :class="dialogStyles.root({fullScreen: props.fullscreen})" @close="close()">
			<article :class="dialogStyles.main()">
				<header :class="dialogStyles.header()">
					<slot name="header">
						<p>{{ props.title }}</p>
						<Button variant="transparent" @click="modelValue = false">
							<Icon icon="mdi:close" />
						</Button>
						<!-- <Icon icon="mdi:close" @click="modelValue = false" /> -->
					</slot>
				</header>
				<section :class="dialogStyles.content()" tabindex="-1">
					<slot />
				</section>
				<footer v-if="$slots.footer" :class="dialogStyles.footer()">
					<slot name="footer" />
				</footer>
			</article>
		</dialog>
	</Teleport>
</template>

<script lang="ts" setup>
	import {useTemplateRef, watch} from 'vue'
	import {dialogStyles} from './theme'
	import {type DialogProps} from './types'
	import {useScrollLock} from '@vueuse/core'
	import Icon from '../icon/Icon.vue'
	import Button from '../button/button.vue'
	import {useDialogCounter} from './utils'

	const props = withDefaults(defineProps<DialogProps>(), {
		teleportTo: 'body',
		teleportDisabled: false,
		fullscreen: false,
		title: ''
	})
	const modelValue = defineModel({type: Boolean, default: false})
	const scrollLock = useScrollLock(typeof document !== 'undefined' ? document.body : null)
	const dialogRef = useTemplateRef<HTMLDialogElement>('dialogRef')
	const dialogCounter = useDialogCounter()
	function close() {
		modelValue.value = false
	}

	watch(dialogRef, (dialog) => {
		if (dialog) {
			dialog.showModal()
			scrollLock.value = true
		}
	})

	watch(modelValue, (newValue) => {
		if (!newValue) {
			dialogRef.value?.close()
			dialogCounter.subtract()

			if (dialogCounter.counter.value === 0) {
				scrollLock.value = false
			}
		} else {
			dialogCounter.add()
		}
	})
</script>
