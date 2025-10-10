<template>
	<UiCollapseRoot v-model="value" disabled>
		<UiCollapseTrigger class="p-2 bg-red-500">
			<UiLabel>trigger</UiLabel>
		</UiCollapseTrigger>
		<UiCollapseContent class="p-2 bg-blue-500">
			<UiLabel>content</UiLabel>
		</UiCollapseContent>
	</UiCollapseRoot>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(true)
</script>
