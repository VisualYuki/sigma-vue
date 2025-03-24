import type {Preview} from '@storybook/vue3'
import {setup} from '@storybook/vue3'
import '../src/main.css'
import {install} from '../src/index'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

setup((app) => {
	app.use(install)
})

export default preview
