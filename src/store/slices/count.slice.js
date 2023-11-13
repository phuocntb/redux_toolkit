import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state + 1;
        },
        decrement: (state, action) => {
            return state - 1;
        },
        reset: function(state, action) {
            return action.payload
        }
    }
})


export const countReducer = countSlice.reducer;
export const countAction = countSlice.actions;