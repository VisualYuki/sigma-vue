<template>
	<div :class="[ui.item(), ns.b(), ns.m(modelValue ? 'active' : ''), 'test']" :name="props.name">
		<UiCollapseRoot v-model="modelValue">
			<UiCollapseTrigger :class="ns.e('trigger')" @click="injected?.toggle(props.name)">
				<div :class="ui.trigger()">
					<div v-if="!!slots.leading" :class="ui.leadingIcon()" class="leadign">
						<slot name="leading"></slot>
					</div>

					<slot name="trigger"></slot>

					<div :class="ui.trailingIcon()">
						<slot name="trailing">
							<UiIcon width="100%" icon="line-md:chevron-down" style="color: var(--color-neutral-500)"></UiIcon>
						</slot>
					</div>
				</div>
			</UiCollapseTrigger>
			<UiCollapseContent :class="ui.content()">
				<slot name="content"></slot>
			</UiCollapseContent>
		</UiCollapseRoot>
	</div>
</template>

<script lang="ts" setup>
	import {ComponentNames} from '@/types/configuration'
	import {computed, inject, watch} from 'vue'
	import {tvInstance} from './theme'
	//import {UiCollapseContent, UiCollapseRoot, UiCollapseTrigger} from '../collapse'
	import {UiIcon} from '../icon'
	import {useNamespace} from '@/utils/use-namespace'
	import {accordionSymbol, type accordionProvideContext} from './utils'

	defineOptions({
		name: ComponentNames.Accordion
	})

	const slots = defineSlots<{
		'leading'(): void
		'trigger'(): void
		'trailing'(): void
		'content'(): void
	}>()

	const injected = inject<accordionProvideContext>(accordionSymbol)

	const props = defineProps({
		name: {
			type: String,
			required: true
		}
	})

	const ui = computed(() => tvInstance())
	const ns = useNamespace('accordion-item')
	const modelValue = defineModel({
		type: Boolean,
		default: false
	})

	// function reactive(name, data) {
	// 	console.log('isReactive:' + name, isReactive(data))

	// 	console.log('isRef:' + name, isRef(data))
	// 	console.log('isShallow:' + name, isShallow(data))
	// 	console.log('isReadonly:' + name, isReadonly(data))
	// }

	// reactive('injected', injected)

	// reactive('props', props)

	// console.log(isReactive(injected?.model))
	// console.log(isRef(injected?.model))
	// console.log(isShallow(injected?.model))
	// console.log(isReadonly(injected?.model))

	//debugger
	watch(
		() => injected?.model,
		(newValue) => {
			modelValue.value = newValue?.value.includes(props.name) || false
		},
		{
			immediate: true,
			deep: true
		}
	)
</script>

<style lang="scss" scoped></style>
