<template>
	<div ref="root" :data-name="ns.b()" :data-state="modelValue" :class="dropdownStyles.root()">
		<div :data-name="ns.e('trigger')">
			<slot name="trigger" />
		</div>

		<div
			v-if="modelValue"
			ref="content"
			:data-name="ns.e('content')"
			:class="dropdownStyles.content({width: props.width, height: props.height, isOffset: isOffset})"
		>
			<slot name="content" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {onClickOutside, useElementBounding} from '@vueuse/core'
	import {ref, useTemplateRef, watch} from 'vue'

	import {getViewport} from '@/utils'

	import {dropdownStyles} from './styles'
	import type {DropdownTriggerProps} from './types'
	import {useNamespace} from '@/utils'
	const props = withDefaults(defineProps<DropdownTriggerProps>(), {
		width: 'max',
		height: 'static'
	})

	const ns = useNamespace('trigger-dropdown')

	const rootRef = useTemplateRef<HTMLElement>('root')
	const modelValue = defineModel<boolean>({default: false})
	//const trigger = useTemplateRef<HTMLElement>('trigger')
	const contentRef = useTemplateRef<HTMLElement>('content')
	const isOffset = ref<boolean>(false)

	function setOffset() {
		const viewport = getViewport()
		const contentBounding = useElementBounding(contentRef)

		if (contentBounding.bottom.value > viewport.height) {
			isOffset.value = true
		}
	}

	onClickOutside(rootRef, () => {
		modelValue.value = false
	})

	watch(
		modelValue,
		async (newValue) => {
			if (newValue) {
				isOffset.value = false
				setOffset()
			}
		},
		{immediate: true}
	)
</script>
