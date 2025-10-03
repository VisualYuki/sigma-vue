<template>
	<UiDialog v-model="value" title="Dialog title" class="vp-raw">
		<template #default>
			<UiButton @click="value2 = !value2">open second modal</UiButton>
		</template>
	</UiDialog>

	<UiDialog v-model="value2" title="Dialog title" class="vp-raw">
		<template #default>second modal</template>
	</UiDialog>

	<UiButton @click="value = !value">open dialog</UiButton>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(false)
	const value2 = ref(false)
</script>
