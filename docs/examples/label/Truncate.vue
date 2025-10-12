<template>
	<UiLabel :truncate="label" as="p" class="w-20">{{ label }}</UiLabel>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'

	const label = ref(
		'lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
	)
</script>
