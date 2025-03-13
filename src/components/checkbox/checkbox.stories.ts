import {type Meta, type StoryObj} from '@storybook/vue3'
import {UiCheckbox} from '.'
import {sizes} from '@/types/configuration'

const meta = {
	title: 'Components/Checkbox',
	component: UiCheckbox,
	tags: ['autodocs']
} satisfies Meta<typeof UiCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		modelValue: {
			control: 'boolean'
		},
		disabled: {
			control: 'boolean'
		},
		size: {
			control: 'select',
			options: sizes
		},
		label: {
			control: 'text'
		}
	},
	args: {
		modelValue: false,
		size: 'default',
		label: 'custom label',
		disabled: false
	},
	render: (args) => ({
		components: {
			UiCheckbox
		},
		setup() {
			return {args}
		},
		template: `
			<UiCheckbox v-model='args.modelValue' :size='args.size' :label='args.label' :disabled='args.disabled'>
			</UiCheckbox>
		`
	})
}
