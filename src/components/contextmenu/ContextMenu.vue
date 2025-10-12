<template>
	<div v-if="isOpened" ref="root" :class="contextmenuStyles.root()" :style="[rootStyles, {maxWidth: props.maxWidth}]" :data-name="ns.b()">
		<ContextSubMenu :level="0" :items="filteredItems" @item-click="handleItemClick">
			<template #header>
				<input v-model="search" type="text" placeholder="Search" class="w-full border-1" />
			</template>
		</ContextSubMenu>
	</div>
</template>

<script lang="ts" setup>
	import type {CSSProperties} from 'vue'
	import {type Fn, onClickOutside, useWindowScroll, useWindowSize} from '@vueuse/core'
	import {computed, nextTick, ref, useTemplateRef, watch} from 'vue'
	import type {ContextMenuItem, ContextMenuProps} from './types'
	import ContextSubMenu from './ContextSubMenu.vue'
	import {contextmenuStyles} from './styles'
	import {filterItems, getViewport} from './utils'
	import {useNamespace} from '@/utils/use-namespace'

	defineOptions({
		inheritAttrs: false
	})

	const ns = useNamespace('contextmenu')

	const props = withDefaults(defineProps<ContextMenuProps>(), {
		items: () => [],
		maxWidth: '320px'
	})

	const modelValue = defineModel<ContextMenuItem>()

	const rootRef = useTemplateRef<HTMLDivElement>('root')
	const rootStyles = ref<CSSProperties>({})
	const isOpened = ref(false)
	const search = ref('')
	const {isScrolling} = useWindowScroll({})
	const windowSize = useWindowSize()
	let stopClickOutside: Fn = () => {}

	const handleItemClick = (item: ContextMenuItem) => {
		if (!Array.isArray(item.children)) {
			close()
			item.command?.()
			modelValue.value = item
		}
	}

	const filteredItems = computed(() => {
		if (!search.value) {
			return props.items
		} else {
			return filterItems<ContextMenuItem>(props.items, search.value)
		}
	})

	const setPositionStyles = (event: MouseEvent) => {
		const rootWidth = rootRef.value!.offsetWidth
		const rootHeight = rootRef.value!.offsetHeight

		const viewport = getViewport()
		rootStyles.value = {}

		if (viewport.width < event.clientX + rootWidth) {
			rootStyles.value.right = '0'
		} else {
			rootStyles.value.left = `${event.clientX}px`
		}

		if (viewport.height < event.clientY + rootHeight) {
			rootStyles.value.bottom = '0'
		} else {
			rootStyles.value.top = `${event.clientY}px`
		}
	}

	const close = () => {
		isOpened.value = false
		stopClickOutside()
	}

	const open = async (event: MouseEvent) => {
		rootStyles.value = {}
		event.preventDefault()

		if (isOpened.value) {
			close()
			await nextTick()
		}

		isOpened.value = true

		await nextTick()

		const {stop} = onClickOutside(
			rootRef.value,
			() => {
				close()
			},
			{controls: true}
		)
		stopClickOutside = stop

		setPositionStyles(event)
	}

	watch(isScrolling, (newValue) => {
		if (newValue) {
			close()
		}
	})

	watch(
		() => [windowSize.height, windowSize.width],
		() => {
			close()
		},
		{deep: true}
	)

	defineExpose({
		close,
		isOpened,
		open
	})
</script>
