<template>
	<UiCollapseRoot v-model="value" disabled>
		<UiCollapseTrigger>
			<div>trigger</div>
		</UiCollapseTrigger>
		<UiCollapseContent>
			<div>content</div>
		</UiCollapseContent>
	</UiCollapseRoot>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(true)
</script>
