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
	import {collapseContentStyles} from './theme'
	import {type MainContext} from './types'
	import {MainContextKey} from './utils'

	const injected = inject<MainContext>(MainContextKey)
</script>
