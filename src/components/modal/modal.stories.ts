import type {Meta, StoryObj} from '@storybook/vue3'
import UiModal from '../modal/modal.vue'
import {sizes} from '@/types/configuration'

const meta = {
	title: 'Components/Modal',
	component: UiModal,
	tags: ['!autodocs']
} satisfies Meta<typeof UiModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => ({
		components: {UiModal},
		setup() {
			return {args}
		},
		template: `<UiModal v-bind='args'> default</UiModal>`
	}),
	argTypes: {
		modelValue: {
			control: 'boolean'
		},
		size: {control: 'select', options: sizes},
		closeOnBackdrop: {
			control: 'boolean'
		},
		closeOnEscape: {
			control: 'boolean'
		},
		fullscreen: {
			control: 'boolean'
		},
		center: {
			control: 'boolean'
		},
		destroyAfterClose: {
			control: 'boolean'
		}
	},
	args: {
		size: 'default',
		closeOnBackdrop: true,
		modelValue: true,
		closeOnEscape: true,
		fullscreen: false,
		center: false,
		destroyAfterClose: false
	}
}
