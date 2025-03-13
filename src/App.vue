<template>
	<div class="font-sans">
		<UiAlert
			v-model="alertModel"
			:override-ui="{root: 'override-root'}"
			color="error"
			variant="subtle"
			title="title1"
			description="description1"
			:closable="true"
			:with-icon="true"
			:center="true"
		/>
		<div v-loading="{value: isLoading, text: 'custom loading text...', background: color}">
			hello
			<br />
			hellow
		</div>
		<button @click="isLoading = !isLoading">change</button>
	</div>

	<UiButton>hello</UiButton>

	<button @click="alertModel = true">click</button>

	<!-- <SiIcon ></SiIcon> -->
</template>

<script lang="ts" setup>
	import {ref} from 'vue'
	import {UiAlert} from './components/alert'
	import {UiButton} from './components/button'

	const color = ref('red')

	const alertModel = ref(true)

	//const loadingDir = ref('v-loading')

	setTimeout(() => {
		color.value = 'green'
		isLoading.value = false
	}, 5000)

	const isLoading = ref(true)
</script>

<style lang="scss" scoped></style>
