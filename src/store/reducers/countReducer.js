const initState = 0;

const INCREMENT = 'INCREMENT';

export function countReducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function incrementCount() {
    return {
        type: INCREMENT
    };
}

export const countAction = {
    incrementCount
}