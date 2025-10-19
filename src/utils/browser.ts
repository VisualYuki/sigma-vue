import { useWindowSize } from '@vueuse/core';

export interface SizeViewport {
  width: number;
  height: number;
}

export function getViewport(): SizeViewport {
  return {
    width: useWindowSize({ includeScrollbar: false }).width.value,
    height: useWindowSize({ includeScrollbar: false }).height.value,
  };
}
