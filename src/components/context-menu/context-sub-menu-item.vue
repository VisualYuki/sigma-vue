<template>
	<li :class="[contextSubMenuItemStyles.root(), {'z-1': selectedItem === props.idx}]" @mouseenter="handleMouseEnter" @click.stop="handleClick">
		<div :class="contextSubMenuItemStyles.content()">
			<Label as="span" :truncate="item.label" :class="contextSubMenuItemStyles.label()">
				{{ item.label }}
			</Label>

			<Icon
				v-if="Array.isArray(item.children)"
				style="transition-duration: 0ms"
				icon="mdi:chevron-right"
				:class="contextSubMenuItemStyles.icon()"
			/>
		</div>

		<ContextSubMenu
			v-if="Array.isArray(item.children) && selectedItem === props.idx"
			:level="props.level + 1"
			:items="item.children"
			@item-click="handleItemClick"
		/>
	</li>
</template>

<script lang="ts" setup>
	import {Icon} from '../icon'
	import {Label} from '../label'
	import ContextSubMenu from './context-sub-menu.vue'
	import {contextSubMenuItemStyles} from './styles'
	import type {ContextMenuItem} from './types'

	const props = defineProps<{
		item: ContextMenuItem
		idx: number
		level: number
		selectedItem: number | null
	}>()

	const emit = defineEmits<{
		(e: 'item-click', item: ContextMenuItem): void
		(e: 'updateSelectedIdx', item: number): void
	}>()

	const handleItemClick = (item: ContextMenuItem) => {
		emit('item-click', item)
	}

	const handleMouseEnter = async () => {
		emit('updateSelectedIdx', props.idx)
	}

	const handleClick = () => {
		emit('item-click', props.item)
	}
</script>
