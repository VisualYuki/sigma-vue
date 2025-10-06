<template>
	<div :class="[accordionItemStyles.root()]" :name="props.name" :data-name="ns.b()" :data-state="modelValue ? 'active' : 'unactive'">
		<CollapseRoot v-model="modelValue" :disabled="props.disabled">
			<CollapseTrigger :data-name="ns.e('trigger')" :class="accordionItemStyles.trigger()" @click="handleClick()">
				<div :class="accordionItemStyles.triggerInner()">
					<slot name="trigger"></slot>

					<div :class="accordionItemStyles.trailingIcon({active: modelValue})">
						<Icon width="100%" icon="line-md:chevron-down"></Icon>
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

	import {useNamespace} from '@/utils/use-namespace'

	import {CollapseContent, CollapseRoot, CollapseTrigger} from '../collapse'
	import {Icon} from '../icon'
	import {accordionItemStyles} from './styles'
	import {type AccordionItemProps, type MainContext} from './types'
	import {mainContextKey} from './utils'

	defineSlots<{
		'content'(): void
		'trigger'(): void
	}>()

	const injected = inject<MainContext>(mainContextKey) as MainContext

	const props = withDefaults(defineProps<AccordionItemProps>(), {
		disabled: false
	})

	const ns = useNamespace('accordion-item')

	const modelValue = defineModel({
		default: false,
		type: Boolean
	})

	function handleClick() {
		if (props.disabled) return
		injected.toggle(props.name)
	}

	watch(
		() => injected.modelValue,
		(newValue) => {
			modelValue.value = newValue?.value.includes(props.name) || false
		},
		{
			deep: true,
			immediate: true
		}
	)
</script>
