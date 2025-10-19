<template>
  <div class="flex justify-start gap-1">
    <InputPart v-model="day" :idx="0" mode="day" />
    <span class="text-text-secondary">/</span>
    <InputPart v-model="month" :idx="1" mode="month" />
    <span class="text-text-secondary">/</span>
    <InputPart v-model="year" :idx="2" mode="year" />
  </div>
</template>

<script lang="ts" setup>
  import { nextTick, provide, ref, watch } from 'vue';

  import { dayjs, type Dayjs } from '../dayjs';
  import InputPart from './Input.vue';
  import { useFocus } from './useFocus';

  const { idx, nextFocus, setFocus, prevFocus } = useFocus(2);

  const day = ref<number | null>(null);
  const month = ref<number | null>(null);
  const year = ref<number | null>(null);

  const modelValue = defineModel<Dayjs | null>({ default: null });
  const skipWatch = ref(false);

  watch([day, month, year], ([day, month, year]) => {
    if (skipWatch.value) return;
    skipWatch.value = true;

    if (day && month && year) {
      modelValue.value = dayjs(`${year}-${month}-${day}`, 'YYYY-MM-DD');
    }

    nextTick(() => {
      skipWatch.value = false;
    });
  });

  watch(
    () => modelValue.value,
    (value) => {
      if (skipWatch.value) return;
      skipWatch.value = true;

      if (value) {
        day.value = value.date();
        month.value = value.month() + 1;
        year.value = value.year();
      }

      nextTick(() => {
        skipWatch.value = false;
      });
    },
  );

  function isValidDate(day: number, month: number, year: number): boolean {
    const daysInMonth = dayjs(`${year}-${month}-01`).daysInMonth();
    return day >= 1 && day <= daysInMonth;
  }

  provide('group-context', {
    idx,
    nextFocus,
    setFocus,
    prevFocus,
    focusOut() {
      if (day.value && month.value && year.value) {
        if (!isValidDate(+day.value, +month.value, +year.value)) {
          day.value = dayjs(`${year.value}-${month.value}-01`).daysInMonth();
        }

        //modelValue.value = `${day.value}.${month.value}.${year.value}`;
      }
    },
  });
</script>
