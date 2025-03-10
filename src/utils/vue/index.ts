import type {App, Component, Plugin} from 'vue'

// TODO: how override name prop to string type
export const withInstall = (component: Component) => {
	function install(app: App) {
		app.component(component.name as string, component)
	}

	return {install} as Plugin
}
