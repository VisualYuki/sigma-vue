<template>
	<div :class="[accordionItemStyles.root()]" :name="props.name" :data-name="ns.b()" :data-state="modelValue ? 'active' : 'unactive'">
		<CollapseRoot v-model="modelValue">
			<CollapseTrigger :data-name="ns.e('trigger')" @click="injected.toggle(props.name)">
				<div :class="accordionItemStyles.trigger()">
					<slot name="trigger"></slot>

					<div :class="accordionItemStyles.trailingIcon()">
						<UiIcon width="100%" icon="line-md:chevron-down" style="color: var(--color-neutral-500)"></UiIcon>
					</div>
				</div>
			</CollapseTrigger>
			<CollapseContent :class="accordionItemStyles.content()">
				<slot name="content"></slot>
			</CollapseContent>
		</CollapseRoot>
	</div>
</template>

<script lang="ts" setup>
	import {inject, watch} from 'vue'
	import {accordionItemStyles} from './theme'
	import {CollapseContent, CollapseRoot, CollapseTrigger} from '../collapse'
	import {UiIcon} from '../icon'
	import {useNamespace} from '@/utils/use-namespace'
	import {mainContextKey, type AccordionItemProps, type MainContext} from './utils'

	defineSlots<{
		'trigger'(): void
		'content'(): void
	}>()

	const injected = inject<MainContext>(mainContextKey) as MainContext

	const props = withDefaults(defineProps<AccordionItemProps>(), {})

	const ns = useNamespace('accordion-item')

	const modelValue = defineModel({
		type: Boolean,
		default: false
	})

	watch(
		() => injected.modelValue,
		(newValue) => {
			modelValue.value = newValue?.value.includes(props.name) || false
		},
		{
			immediate: true,
			deep: true
		}
	)
</script>
