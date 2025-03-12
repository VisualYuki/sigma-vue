export const types = ['title', 'h1', 'text', 'image', 'circle'] as const

export type Types = (typeof types)[number]
