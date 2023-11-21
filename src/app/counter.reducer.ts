import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";

export interface CounterState {
    counter: number;
}

export const initialState: CounterState = {
    counter: 0
};

export const counterReducer = createReducer(
    initialState,
    on(increment, state => ({ ...state, counter: state.counter + 1 })),
    on(decrement, state => ({ ...state, counter: state.counter - 1 }))
)
