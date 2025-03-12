import type {TV} from 'tailwind-variants'

export type tailwindVariantOptions = Pick<ReturnType<TV>, 'base' | 'compoundSlots' | 'compoundVariants' | 'defaultVariants' | 'slots' | 'variants'>
