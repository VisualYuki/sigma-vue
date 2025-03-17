import {type Meta, type StoryObj} from '@storybook/vue3'
import {UiAccordion, UiAccordionItem} from '.'

const meta = {
	title: 'Components/Accordion',
	component: UiAccordion,
	tags: ['autodocs']
} satisfies Meta<typeof UiAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		accordion: {
			control: 'boolean'
		}
		// modelValue: {
		// 	control: ''
		// }
	},
	args: {
		accordion: false
		//modelValue: ['']
	},
	render: (args) => ({
		components: {
			UiAccordion,
			UiAccordionItem
		},
		setup() {
			return {args}
		},
		template: `
			<UiAccordion v-bind='args'>
				<UiAccordionItem name="1">
					<template #trigger>trigger 1</template>
					<template #content>content 1</template>
				</UiAccordionItem>
				<UiAccordionItem name="2">
					<template #trigger>trigger 2</template>
					<template #content>content 2</template>
				</UiAccordionItem>
				<UiAccordionItem name="3">
					<template #trigger>trigger 3</template>
					<template #content>content 3</template>
				</UiAccordionItem>
			</UiAccordion>
		`
	})
}
