import {defineComponent, h, type Component, type PropType} from 'vue'
import {Slot} from './Slot'

export type AsTag =
	| 'a'
	| 'button'
	| 'div'
	| 'form'
	| 'h2'
	| 'h3'
	| 'img'
	| 'input'
	| 'label'
	| 'li'
	| 'nav'
	| 'ol'
	| 'p'
	| 'span'
	| 'svg'
	| 'ul'
	| 'template'
	| ({} & string) // any other string

export default defineComponent({
	props: {
		asChild: {
			type: Boolean,
			default: false
		},
		as: {
			type: [String, Object] as PropType<AsTag | Component>,
			default: 'div'
		}
	},

	setup(props, {attrs, slots}) {
		const asTag = props.asChild ? 'template' : props.as

		const SELF_CLOSING_TAGS = ['textarea', 'img', 'input']

		if (typeof props.as === 'string' && SELF_CLOSING_TAGS.includes(props.as)) {
			return () => h(props.as, attrs)
		}

		if (asTag !== 'template') {
			return () => h(props.as, attrs, {default: slots.default})
		}

		return () => h(Slot, attrs, {default: slots.default})
	}
})
