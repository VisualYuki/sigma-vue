<template>
	<p class="border border-dashed p-4 text-center" @contextmenu="handlerContextMenu($event)">
		Щелкните правой кнопкой мыши здесь
		<UiContextMenu ref="menu" v-model="selectedItem" class="vp-raw" max-width="380px" :items="items" />
	</p>
	<p>Выбран пункт меню: {{ selectedItem?.label }}</p>
	<p>Действие пункта меню: {{ commandItem }}</p>
</template>

<script lang="ts" setup>
	import type {ContextMenuItem, ContextMenu as UiContextMenu} from '@/components/context-menu'

	import {ref, useTemplateRef} from 'vue'

	const handlerContextMenu = (event: MouseEvent) => {
		commandItem.value = ''

		menu.value?.open(event)
	}

	const menu = useTemplateRef<InstanceType<typeof UiContextMenu>>('menu')
	const selectedItem = ref<ContextMenuItem>()
	const commandItem = ref('')

	const items = ref<ContextMenuItem[]>([
		{
			command: () => {
				commandItem.value = 'execute sort by ascending'
			},

			label: 'sort by ascending'
		},
		{
			command: () => {
				commandItem.value = 'execute sort by descending'
			},

			label: 'sort by descending'
		},
		{
			label: 'automatically change the size of this column'
		},
		{
			label: 'group by column'
		},
		{
			children: [
				{
					label: 'left'
				},
				{
					label: 'right'
				},
				{
					label: 'detach'
				}
			],
			label: 'attach column'
		},
		{
			children: [
				{
					children: [
						{
							label: 'left'
						},
						{
							label: 'right'
						},
						{
							children: [{label: 'vertical'}, {label: 'horizontal'}],
							label: 'center'
						}
					],
					label: 'alignment'
				},
				{
					children: [
						{
							label: 'string'
						},
						{
							label: 'number'
						},
						{
							label: 'date'
						}
					],
					label: 'format'
				}
			],
			label: 'settings'
		}
	])
</script>
