<template>
	<div>move focus to button and press space or enter</div>
	<br />
	<br />
	<UiButton @click="handleClick">button</UiButton>
</template>

<script setup lang="ts">
	const handleClick = () => {
		alert('click')
	}
</script>
