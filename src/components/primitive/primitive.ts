import {type Component, defineComponent, h, type PropType} from 'vue'
//import {Slot} from './Slot'

export type AsTag = ({} & string) | keyof HTMLElementTagNameMap // any other string

export default defineComponent({
	props: {
		as: {
			default: 'div',
			type: [String, Object] as PropType<AsTag | Component>
		}
		// asChild: {
		// 	default: false,
		// 	type: Boolean
		// }
	},

	setup(props, {attrs, slots}) {
		//const asTag = props.asChild ? 'template' : props.as

		const SELF_CLOSING_TAGS = ['textarea', 'img', 'input']

		if (typeof props.as === 'string' && SELF_CLOSING_TAGS.includes(props.as)) {
			return () => h(props.as, attrs)
		}

		// if (asTag !== 'template') {
		// 	return () => h(props.as, attrs, {default: slots.default})
		// }

		return () => h(props.as, attrs, {default: slots.default})
	}
})
