<template>
	<CollapseTransition>
		<div v-show="injected?.opened.value" data-name="collapse-content" :class="collapseContentStyles.root()">
			<div :class="collapseContentStyles.inner()">
				<slot></slot>
			</div>
		</div>
	</CollapseTransition>
</template>

<script lang="ts" setup>
	import {inject} from 'vue'
	import {CollapseTransition} from '../transition'
	import {MainContextKey, type MainContext} from './utils'
	import {collapseContentStyles} from './theme'

	const injected = inject<MainContext>(MainContextKey)
</script>
