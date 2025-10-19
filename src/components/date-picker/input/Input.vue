<template>
  <div
    ref="contenteditableRef"
    contenteditable="true"
    tabindex="0"
    class="text-center"
    :style="{ caretColor: 'transparent', width: props.mode === 'year' ? '44px' : '22px' }"
    @keydown="handleKeyDown"
    @focus="handleFocus"
    @focusout="handleFocusOut"
  >
    {{ formattedLocalValue }}
  </div>
</template>

<script lang="ts" setup>
  import { computed, inject, nextTick, ref, watch, type PropType } from 'vue';

  import type { GroupContext } from '../types';
  import { formatWithLeadingZero } from '../utils';

  const props = defineProps({
    mode: {
      type: String as PropType<'seconds' | 'minutes' | 'hours' | 'day' | 'month' | 'year'>,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  });

  const injectData = inject<GroupContext>('group-context')!;

  watch(injectData.idx, (newValue) => {
    if (props.idx === newValue) {
      contenteditableRef.value.focus();
    }
  });

  const modelValue = defineModel<number | null>({ default: null });
  const localValue = ref<string>(modelValue.value?.toString() || '');

  watch(modelValue, (newValue) => {
    localValue.value = newValue?.toString() || '';
  });

  const formattedLocalValue = computed(() => {
    if (props.mode === 'year') {
      return localValue.value ? formatWithLeadingZero(localValue.value, 4) : '_ _ _ _';
    }

    return localValue.value ? formatWithLeadingZero(localValue.value) : '_ _';
  });
  const contenteditableRef = ref();

  function inRange(str: string, min: number, max: number) {
    return min <= +str && +str <= max;
  }

  function isBackspace(e: KeyboardEvent) {
    return e.key === 'Backspace';
  }

  function isDigit(e: KeyboardEvent) {
    return /^\d$/.test(e.key);
  }

  function isTab(e: KeyboardEvent) {
    return e.key === 'Tab';
  }

  function isNextFocus(maxDigit: number) {
    const num = +localValue.value;

    if (localValue.value.length === 2 || num >= maxDigit) {
      return true;
    }

    return false;
  }

  async function updateHours(e: KeyboardEvent) {
    if (localValue.value === '') {
      localValue.value = e.key;
    } else if (inRange(localValue.value + e.key, 0, 23)) {
      localValue.value = (localValue.value + e.key).slice(-2);
    } else {
      localValue.value = e.key;
    }

    await nextTick();

    if (isNextFocus(3)) {
      injectData.nextFocus();
    }
  }

  async function updateMinutesOrSeconds(e: KeyboardEvent) {
    if (localValue.value === '') {
      localValue.value = e.key;
    } else if (inRange(localValue.value + e.key, 0, 59)) {
      localValue.value = (localValue.value + e.key).slice(-2);
    } else {
      localValue.value = e.key;
    }

    await nextTick();

    if (isNextFocus(6)) {
      injectData.nextFocus();
    }
  }

  async function updateDay(e: KeyboardEvent) {
    if (localValue.value === '') {
      localValue.value = e.key;
    } else if (inRange(localValue.value + e.key, 1, 31)) {
      localValue.value = localValue.value + e.key;
    } else {
      localValue.value = e.key;
    }

    if (isNextFocus(4)) {
      injectData.nextFocus();
    }
  }

  async function updateMonth(e: KeyboardEvent) {
    if (localValue.value === '') {
      localValue.value = e.key;
    } else if (inRange(localValue.value + e.key, 1, 12)) {
      localValue.value = localValue.value + e.key;
    } else {
      localValue.value = e.key;
    }

    if (isNextFocus(2)) {
      injectData.nextFocus();
    }
  }

  async function updateYear(e: KeyboardEvent) {
    if (localValue.value === '') {
      localValue.value = e.key;
    } else if (inRange(localValue.value + e.key, 1, 9999)) {
      localValue.value = localValue.value + e.key;
    } else {
      localValue.value = e.key;
    }

    // await nextTick();

    // if (localValue.value.length === 4) {

    //   injectData.nextFocus();
    // }
  }

  function handleFocus() {
    injectData.setFocus(props.idx);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (isBackspace(e)) {
      if (localValue.value.length > 0) {
        localValue.value = localValue.value.slice(0, -1);
      } else {
        injectData.prevFocus();
      }

      e.preventDefault();
      return;
    }

    if (isTab(e)) {
      return;
    }

    if (!isDigit(e)) {
      e.preventDefault();
      return;
    }

    if (props.mode === 'hours') {
      updateHours(e);
    }

    if (props.mode === 'minutes' || props.mode === 'seconds') {
      updateMinutesOrSeconds(e);
    }

    if (props.mode === 'day') {
      updateDay(e);
    }

    if (props.mode === 'month') {
      updateMonth(e);
    }

    if (props.mode === 'year') {
      updateYear(e);
    }

    e.preventDefault();
  }

  function handleFocusOut() {
    if (props.mode === 'day' && localValue.value === '0') {
      localValue.value = '1';
    }

    if (props.mode === 'month' && localValue.value === '0') {
      localValue.value = '1';
    }

    if (props.mode === 'year' && localValue.value === '0') {
      localValue.value = '1900';
    }

    if (props.mode === 'year' && localValue.value.length === 4) {
      if (+localValue.value < 1900) {
        localValue.value = '1900';
      } else if (+localValue.value > 2100) {
        localValue.value = '2100';
      }
    }

    if (localValue.value === '') {
      modelValue.value = null;
    } else {
      modelValue.value = +localValue.value;
    }

    injectData.focusOut?.();
  }
</script>
