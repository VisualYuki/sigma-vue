<template>
	<UiDialog v-model="value" title="Dialog title" class="vp-raw">
		<template #default>
			<form>
				<input value="1" />
				<input value="2" />
			</form>
		</template>
		<template #footer>footer content</template>
	</UiDialog>
	<UiButton @click="value = !value">open dialog</UiButton>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(false)
</script>
