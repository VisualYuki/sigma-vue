import {type Meta, type StoryObj} from '@storybook/vue3'
import {UiButton} from './'
import {colors, sizes} from '@/types/configuration'
import {buttonVariants} from './theme'

const meta = {
	title: 'Components/Button',
	component: UiButton,
	tags: ['autodocs']
} satisfies Meta<typeof UiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		color: {
			control: 'select',
			options: colors
		},
		variant: {
			control: 'select',
			options: buttonVariants
		},
		size: {
			control: 'select',
			options: sizes
		},
		disabled: {
			control: 'boolean'
		},
		tag: {
			control: 'text'
		}
	},
	args: {
		color: 'primary',
		variant: 'solid',
		size: 'default',
		disabled: false,
		tag: 'button'
	},
	render: (args) => ({
		components: {
			UiButton: UiButton
		},
		setup() {
			return {args}
		},
		template: `
			<UiButton v-bind='args'>
				button content
			</UiButton>
		`
	})
}
