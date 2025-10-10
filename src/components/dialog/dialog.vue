<template>
	<Teleport v-if="modelValue" :to="props.teleportTo" :disabled="props.teleportDisabled">
		<UseFocusTrap>
			<dialog v-bind="$attrs" ref="dialogRef" :class="dialogStyles.root({fullScreen: props.fullscreen})" @close="close()">
				<article :class="dialogStyles.main()">
					<header :class="dialogStyles.header()">
						<slot name="header">
							<p>{{ props.title }}</p>
							<Button variant="transparent" @click="modelValue = false">
								<Icon icon="mdi:close" />
							</Button>
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
		</UseFocusTrap>
	</Teleport>
</template>

<script lang="ts" setup>
	import {useScrollLock} from '@vueuse/core'
	import {UseFocusTrap} from '@vueuse/integrations/useFocusTrap/component'
	import {useTemplateRef, watch} from 'vue'

	import Button from '../button/button.vue'
	import Icon from '../icon/Icon.vue'
	import {dialogStyles} from './styles'
	import {type DialogProps} from './types'
	import {useDialogCounter} from './utils'

	const props = withDefaults(defineProps<DialogProps>(), {
		fullscreen: false,
		teleportDisabled: false,
		teleportTo: 'body',
		title: ''
	})
	const modelValue = defineModel({default: false, type: Boolean})
	const scrollLock = useScrollLock(document.documentElement)
	const dialogRef = useTemplateRef<HTMLDialogElement>('dialogRef')
	const dialogCounter = useDialogCounter()

	defineOptions({
		inheritAttrs: false
	})

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
				document.documentElement.style.scrollbarGutter = 'auto'
			}
		} else {
			dialogCounter.add()

			if (dialogCounter.counter.value === 1) {
				document.documentElement.style.scrollbarGutter = 'stable'
			}
		}
	})
</script>
