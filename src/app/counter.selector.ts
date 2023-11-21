import { CounterState } from './counter.reducer';

export const selectCounter = (state: CounterState) => state.counter;