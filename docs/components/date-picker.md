---
title: DatePicker
---

<script setup lang="ts">
	import Base from "../examples/date-picker/Base.vue"
	import DateRange from "../examples/date-picker/DateRange.vue"
	import DateTime from "../examples/date-picker/DateTime.vue"
	import Time from "../examples/date-picker/Time.vue"
</script>

# DatePicker

## Base

::: raw
<div class="preview">
  <Base  />
</div>
:::

<<< @/examples/date-picker/Base.vue

## Date range

::: raw
<div class="preview">
  <DateRange  />
</div>
:::

<<< @/examples/date-picker/DateRange.vue

## Date and time

::: raw
<div class="preview">
  <DateTime />
</div>
:::

<<< @/examples/date-picker/DateTime.vue

## Time

::: raw
<div class="preview">
  <Time  />
</div>
:::

<<< @/examples/date-picker/Time.vue

## API компонента

### Свойства / Props

| Свойство              | Тип                                             | Значение по умолчанию | Описание                                 |
| --------------------- | ----------------------------------------------- | --------------------- | ---------------------------------------- |
| mode                  | `date` \| `time` \| `date-time` \| `date-range` | `date`                | Вариант поля ввода                       |
| modelValue:date       | `null` \| `Dayjs`                               | `null`                | Значение даты для `date` и `date-time`   |
| modelValue:start-date | `null` \| `Dayjs`                               | `null`                | Значение начальной даты для `date-range` |
| modelValue:end-date   | `null` \| `Dayjs`                               | `null`                | Значение конечной даты для `date-range`  |
| modelValue:hours      | `null` \| `number`                              | `null`                | Значение часов для `time` и `date-time`  |
| modelValue:minutes    | `null` \| `number`                              | `null`                | Значение минут для `time` и `date-time`  |
| modelValue:seconds    | `null` \| `number`                              | `null`                | Значение секунд для `time` и `date-time` |
| label                 | `string`                                        | `undefined`           | Заголовок                                |

