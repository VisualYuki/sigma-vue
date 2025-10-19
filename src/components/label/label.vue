<template>
	<component
		:is="props.as"
		ref="root"
		:class="labelStyles.root({size: props.size, weight: props.weight, color: props.color, truncate: props.truncate !== ''})"
		:data-name="ns.b()"
	>
		<slot />
	</component>
</template>

<script lang="ts" setup>
	import {useNamespace} from '@/utils'

	import type {LabelProps} from './types'

	import {labelStyles} from './styles'
	import {onMounted, useTemplateRef} from 'vue'
	import {isTextTruncated} from './utils'

	const rootRef = useTemplateRef<HTMLElement>('root')

	const props = withDefaults(defineProps<LabelProps>(), {as: 'span', color: 'black', size: 'md', weight: 'normal', truncate: ''})

	const ns = useNamespace('label')

	onMounted(() => {
		if (props.truncate && rootRef.value) {
			if (isTextTruncated(rootRef.value)) {
				rootRef.value.setAttribute('title', props.truncate)
			}
		}
	})
</script>
