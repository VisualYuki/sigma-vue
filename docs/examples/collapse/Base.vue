<template>
	<UiCollapseRoot v-model="value">
		<UiCollapseTrigger class="p-2 bg-red-500">
			<div>trigger</div>
		</UiCollapseTrigger>
		<UiCollapseContent class="p-2 bg-blue-500">
			<div>content</div>
		</UiCollapseContent>
	</UiCollapseRoot>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(false)
</script>
