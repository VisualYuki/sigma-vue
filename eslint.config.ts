import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import {defineConfigWithVueTs, vueTsConfigs} from '@vue/eslint-config-typescript'
// @ts-ignore
import pluginCypress from 'eslint-plugin-cypress/flat'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginVue from 'eslint-plugin-vue'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
	{
		files: ['**/*.{ts,mts,tsx,vue}'],
		name: 'app/files-to-lint'
	},
	{
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/temp/**', '**/src/App.vue'],
		name: 'app/files-to-ignore'
	},

	pluginVue.configs['flat/recommended'],
	vueTsConfigs.recommended,
	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*']
	},
	{
		...pluginCypress.configs.recommended,
		files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}']
	},
	{
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/prefer-import-from-vue': 'off'
		}
	},
	// perfectionist.configs['recommended-alphabetical'],
	// {
	// 	files: ['**/styles.ts'],
	// 	name: 'app/disable-perfectionist-for-styles',
	// 	rules: {
	// 		'perfectionist/sort-classes': 'off',
	// 		'perfectionist/sort-exports': 'off',
	// 		'perfectionist/sort-imports': 'off',
	// 		'perfectionist/sort-interfaces': 'off',
	// 		'perfectionist/sort-named-exports': 'off',
	// 		'perfectionist/sort-named-imports': 'off',
	// 		'perfectionist/sort-object-types': 'off',
	// 		'perfectionist/sort-objects': 'off'
	// 	}
	// },

	skipFormatting
)
