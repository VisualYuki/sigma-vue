import {type Meta, type StoryObj} from '@storybook/vue3'
import {UiAlert} from './'
import {colors} from '@/types/configuration'
import {alertVariants} from './theme'

const meta = {
	title: 'Components/Alert',
	component: UiAlert,
	tags: ['autodocs']
} satisfies Meta<typeof UiAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		title: {
			control: 'text'
		},
		description: {
			control: 'text'
		},
		color: {
			control: 'select',
			options: colors
		},
		variant: {
			control: 'select',
			options: alertVariants
		},
		closable: {
			control: 'boolean'
		},
		withIcon: {
			control: 'boolean'
		},
		center: {
			control: 'boolean'
		},
		modelValue: {
			control: 'boolean'
		}
	},
	args: {
		title: 'alert title',
		description: 'alert description',
		color: 'primary',
		variant: 'solid',
		closable: true,
		withIcon: false,
		center: false,
		modelValue: true
	},
	render: (args) => ({
		components: {
			UiAlert
		},
		setup() {
			return {args}
		},
		template: `
			<UiAlert v-bind='args'>
				<template #title> {{args.title}} </template>
				<template #description> {{args.description}} </template>
			</UiAlert>
		`
	})
}
