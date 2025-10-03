<template>
	<Scrollbar>
		<div style="height: 400px">
			<ul>
				<li v-for="number in 15" :key="number" class="mb-2 border-3 border-success bg-background p-4 text-center text-success">
					{{ number }}
				</li>
			</ul>
		</div>
	</Scrollbar>
</template>

<script lang="ts" setup>
	import Scrollbar from '../scrollbar.vue'
</script>

<style></style>
