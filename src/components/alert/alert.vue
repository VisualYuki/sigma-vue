<template>
	<CollapseRoot v-model="modelValue">
		<CollapseContent>
			<div :class="alertStyles.root({color: props.color, variant: props.variant})" :data-name="ns.b()">
				<div :class="alertStyles.wrapper()" :data-name="ns.e('wrapper')">
					<div :class="alertStyles.content()" :data-name="ns.e('content')">
						<div v-if="props.title || $slots.title" :class="alertStyles.title()">
							<slot name="title">
								{{ props.title }}
							</slot>
						</div>
						<div v-if="props.description || $slots.description" :class="alertStyles.description()">
							<slot name="description">
								{{ props.description }}
							</slot>
						</div>
					</div>

					<CollapseTrigger v-if="props.closable" :class="alertStyles.close()">
						<Button @click="methods.handleClose">
							<Icon icon="mdi:close" size="20" />
						</Button>
					</CollapseTrigger>
				</div>
			</div>
		</CollapseContent>
	</CollapseRoot>
</template>

<script lang="ts" setup>
	import {useNamespace} from '@/utils'

	import {Button} from '../button'
	import {CollapseContent, CollapseRoot, CollapseTrigger} from '../collapse'
	import {Icon} from '../icon'
	import {alertStyles} from './styles'
	import {type AlertProps} from './types'

	const props = withDefaults(defineProps<AlertProps>(), {
		closable: false,
		color: 'primary',
		description: '',
		title: '',
		variant: 'solid'
	})

	const emit = defineEmits(['close'])

	const ns = useNamespace('alert')
	const modelValue = defineModel({default: true, type: Boolean})

	const methods = {
		handleClose() {
			emit('close')
		}
	}
</script>
