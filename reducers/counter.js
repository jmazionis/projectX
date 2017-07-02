import { incrementCounter, decrementCounter } from "../actions/index";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../constants/actionTypes";

const initialState = {
    counterValue: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, counterValue: ++state.counterValue };
        case DECREMENT_COUNTER:
            return { ...state, counterValue: --state.counterValue };
        default:
            return state;
    }
}
