<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
			<path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3c4.97 0 9 4.03 9 9">
				<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.225s" values="16;0" />
				<animateTransform attributeName="transform" dur="1.125s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
			</path>
			<path
				stroke-dasharray="64"
				stroke-dashoffset="64"
				stroke-opacity="0.25"
				d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
			>
				<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.9s" values="64;0" />
			</path>
		</g>
	</svg>
</template>

<script setup lang="ts">
	import {defineComponent} from 'vue'

	//TODO: поразбираться с svg'ами

	defineComponent({
		name: 'LoadingIcon'
	})
</script>
