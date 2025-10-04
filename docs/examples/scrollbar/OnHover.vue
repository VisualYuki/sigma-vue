<template>
	<UiScrollbar on-hover>
		<div>
			<ul class="flex-no-wrap flex">
				<li v-for="number in 15" :key="number" class="me-5 border-3 border-success bg-background p-10 text-center text-success">
					{{ number }}
				</li>
			</ul>
		</div>
	</UiScrollbar>
</template>

<script lang="ts" setup></script>
