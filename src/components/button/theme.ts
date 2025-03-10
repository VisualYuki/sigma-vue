export default {
  base: {
    root: 'rounded border flex px-4 py-4 bg-opacity-5',
    title: 'text-sm font-semibold leading-none',
    body: 'text-sm leading-none mt-2.5',
    closeIcon: 'ml-4 select-none cursor-pointer',
  },
  variants: {
    default: {
      root: 'bg-white',
    },
    primary: {
      root: 'border-blue-600 bg-blue-600',
    },
    success: {
      root: 'border-green-500 bg-green-600',
    },
    warning: {
      root: 'border-yellow-500 bg-yellow-500',
    },
    danger: {
      root: 'border-red-500 bg-red-500',
    },
  }
}