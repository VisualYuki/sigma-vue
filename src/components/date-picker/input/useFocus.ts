import { ref } from 'vue';

export function useFocus(max: number) {
  const idx = ref(0);

  function nextFocus() {
    if (idx.value < max) {
      idx.value++;
    }
  }

  function prevFocus() {
    if (idx.value > 0) {
      idx.value--;
    }
  }

  function setFocus(value: number) {
    idx.value = value;
  }

  return {
    idx,
    nextFocus,
    prevFocus,
    setFocus,
  };
}
