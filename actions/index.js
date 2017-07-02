import * as actions from "../constants/actionTypes";

export const incrementCounter = () => {
    return {
        type: actions.INCREMENT_COUNTER
    };
};

export const decrementCounter = () => {
    return {
        type: actions.DECREMENT_COUNTER
    };
};
