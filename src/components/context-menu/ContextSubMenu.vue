<template>
	<div ref="rootRef" :class="contextSubMenuStyles.root({isMainMenu: props.level === 0})" :style="subMenuStyles">
		<div v-if="$slots?.header" :class="contextSubMenuStyles.menu()">
			<slot name="header" />
		</div>

		<ul>
			<ContextSubMenuItem
				v-for="(item, idx) in props.items"
				:key="idx"
				:item="item"
				:idx="idx"
				:level="props.level"
				:selected-item="selectedItem"
				@update-selected-idx="updateSelectedIdx"
				@item-click="handleItemClick"
			/>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import {nextTick, onMounted, ref, type CSSProperties} from 'vue'
	import {useElementBounding} from '@vueuse/core'

	import {getViewport} from './utils'
	import ContextSubMenuItem from './ContextSubMenuItem.vue'
	import {contextSubMenuStyles} from './styles'
	import type {ContextMenuItem} from './types'

	const props = defineProps<{
		items: ContextMenuItem[]
		level: number
	}>()

	const selectedItem = ref<number | null>(null)
	const rootRef = ref<HTMLUListElement>()
	const subMenuStyles = ref<CSSProperties>({})

	const emit = defineEmits<{
		(e: 'item-click', item: ContextMenuItem): void
	}>()

	const handleItemClick = (item: ContextMenuItem) => {
		emit('item-click', item)
	}

	function updateSelectedIdx(newValue: number) {
		selectedItem.value = newValue
	}

	async function setPositionStyles() {
		await nextTick()

		if (rootRef.value && props.level !== 0) {
			const viewport = getViewport()
			const contextMenuWidth = rootRef.value!.offsetWidth
			const contextMenuHeight = rootRef.value!.offsetHeight

			const right = viewport.width - useElementBounding(rootRef.value!.parentElement).right.value
			const bottom = viewport.height - useElementBounding(rootRef.value!.parentElement).bottom.value

			if (right < contextMenuWidth) {
				subMenuStyles.value.right = '100%'
			} else {
				subMenuStyles.value.left = '100%'
			}

			if (bottom < contextMenuHeight) {
				subMenuStyles.value.bottom = '0'
			} else {
				subMenuStyles.value.top = '0'
			}
		}
	}

	onMounted(() => {
		setPositionStyles()
	})
</script>
