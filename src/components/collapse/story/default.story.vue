<template>
	<Story title="Collapse" :layout="{type: 'single', iframe: true}">
		<Variant title="default">
			<CollapseRoot v-model="value">
				<CollapseTrigger>
					<div>trigger</div>
				</CollapseTrigger>

				<CollapseContent>
					<div>content</div>
				</CollapseContent>
			</CollapseRoot>
		</Variant>
	</Story>
</template>

<script lang="ts" setup>
	import {CollapseRoot, CollapseContent, CollapseTrigger} from '..'
	import {ref} from 'vue'

	const value = ref(false)
</script>
