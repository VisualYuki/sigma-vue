import { useFocus } from './input/useFocus';
export { type Dayjs } from 'dayjs';

export type GroupContext = {
  idx: ReturnType<typeof useFocus>['idx'];
  nextFocus: ReturnType<typeof useFocus>['nextFocus'];
  setFocus: ReturnType<typeof useFocus>['setFocus'];
  prevFocus: ReturnType<typeof useFocus>['prevFocus'];
  focusOut?: () => void;
};

export interface BasePickerProps {
  label?: string;
  mode: 'date' | 'date-range' | 'time' | 'date-time';
}
