import type {StoryObj} from '@storybook/vue3'
import {loadingDirective} from './index'

const meta = {
	title: 'Directives/Loading',
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: 'boolean'
		}
	},
	args: {
		value: false
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => ({
		setup() {
			return {args}
		},
		directives: {
			loading: loadingDirective
		},
		template: `
			<div v-loading='args.value'>
				default content <br> second line
			</div>
		`
	})
}
