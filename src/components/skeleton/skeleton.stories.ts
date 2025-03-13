import {type Meta, type StoryObj} from '@storybook/vue3'
import {UiSkeleton} from './'

import {types} from './utils'

const meta = {
	title: 'Components/Skeleton',
	component: UiSkeleton,
	tags: ['autodocs']
} satisfies Meta<typeof UiSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		type: {
			control: 'select',
			options: types
		},
		animated: {
			control: 'boolean'
		}
	},
	args: {
		type: 'image',
		animated: true
	},
	render: (args) => ({
		components: {
			UiSkeleton
		},
		setup() {
			return {args}
		},
		template: `
			<UiSkeleton :animated='args.animated' :type='args.type'>
			</UiSkeleton>
		`
	})
}
