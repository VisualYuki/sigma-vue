import type {INSTALLED_KEY} from '@/constants/key'
import type {loadingDirective} from './src/directives/loading'

declare module 'vue' {
	interface App {
		[INSTALLED_KEY]?: boolean
	}

	interface GlobalDirectives {
		vLoading: loadingDirective
	}

	// interface ComponentOptionsBase {
	// 	name: string
	// }
}

declare global {}
