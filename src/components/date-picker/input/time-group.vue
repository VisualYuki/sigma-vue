<template>
  <div class="flex justify-start gap-2">
    <InputPart v-model="hours" :idx="0" mode="hours"></InputPart> :
    <InputPart v-model="minutes" :idx="1" mode="minutes"></InputPart> :
    <InputPart v-model="seconds" :idx="2" mode="seconds"></InputPart>
  </div>
</template>

<script lang="ts" setup>
  import { provide } from 'vue';

  import InputPart from './Input.vue';
  import { useFocus } from './useFocus';

  const hours = defineModel<number | null>('hours', { default: null });
  const minutes = defineModel<number | null>('minutes', { default: null });
  const seconds = defineModel<number | null>('seconds', { default: null });

  const { idx, nextFocus, setFocus, prevFocus } = useFocus(2);

  provide('group-context', {
    idx,
    nextFocus,
    setFocus,
    prevFocus,
  });
</script>
