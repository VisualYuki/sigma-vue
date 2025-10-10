<template>
	<UiCollapseRoot v-model="value">
		<UiCollapseTrigger class="p-2 bg-red-500">
			<UiLabel color="white">trigger</UiLabel>
		</UiCollapseTrigger>
		<UiCollapseContent class="p-2 bg-blue-500">
			<UiLabel color="white">content</UiLabel>
		</UiCollapseContent>
	</UiCollapseRoot>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(false)
</script>
