import {colors, type TColorTheme, type TThemeSizes} from '@/types/configuration'
import {tv} from 'tailwind-variants'
export const buttonVariants = ['solid', 'outline', 'soft'] as const

export const tvInstance = tv({
	slots: {
		base: [
			`rounded-(--ui-radius) font-medium inline-flex items-center
			focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-75 transition-colors`
		]
	},
	variants: {
		color: Object.fromEntries(
			colors.map((colorName) => {
				return [colorName, '']
			})
		) as TColorTheme,
		variant: {
			solid: '',
			outline: '',
			soft: ''
		} satisfies {[prop in (typeof buttonVariants)[number]]: ''},
		size: {
			small: 'px-2.5 py-1.5 text-xs gap-1.5',
			default: 'px-2.5 py-1.5 text-sm gap-1.5',
			large: 'px-3 py-2 text-sm gap-2'
		} satisfies TThemeSizes,
		loading: {
			true: ''
		}
	},
	compoundVariants: [
		{
			color: 'primary',
			variant: 'solid',
			class: `text-(--ui-text-contrast) bg-(--ui-primary) hover:bg-(--ui-primary)/75 disabled:bg-(--ui-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)`
		},
		{
			color: 'primary',
			variant: 'outline',
			class: `ring ring-inset ring-(--ui-primary)/50 text-(--ui-primary) hover:bg-(--ui-primary)/10 disabled:bg-transparent dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-(--ui-primary)`
		},
		{
			color: 'primary',
			variant: 'soft',
			class: `text-(--ui-primary) bg-(--ui-primary)/10 hover:bg-(--ui-primary)/15 focus-visible:bg-(--ui-primary)/15 disabled:bg-(--ui-primary)/10`
		}
	]
})
