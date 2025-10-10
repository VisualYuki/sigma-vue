<template>
	<UiCheckbox v-model="value" label="Label" />
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const value = ref(false)
</script>
