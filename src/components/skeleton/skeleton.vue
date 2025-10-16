<template>
	<div :class="[skeletonStyles.root({type: props.type, animated: props.animated})]">
		<slot name="default">
			<template v-if="$props.type === 'image'">
				<Icon icon="ph:image-duotone" color="var(--color-neutral-400)" size="40"></Icon>
			</template>
		</slot>
	</div>
</template>

<script lang="ts" setup>
	import {skeletonStyles} from './styles'
	import type {Types} from './utils'
	import {Icon} from '../icon'

	const props = withDefaults(defineProps<{type?: Types; animated?: boolean}>(), {
		type: 'text',
		animated: false
	})
</script>

<style lang="scss" scoped></style>
