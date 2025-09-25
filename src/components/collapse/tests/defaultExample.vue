<template>
	<CollapseRoot v-model="value">
		<CollapseTrigger>
			<div>trigger</div>
		</CollapseTrigger>

		<CollapseContent>
			<div>content</div>
		</CollapseContent>
	</CollapseRoot>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'
	import {CollapseRoot, CollapseContent, CollapseTrigger} from '..'

	const value = ref(false)
</script>
