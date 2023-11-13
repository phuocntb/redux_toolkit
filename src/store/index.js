// import {createStore} from 'redux';

// import { countReducer } from './reducers/countReducer';

// const store = createStore(countReducer);



import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./slices/count.slice";

const store = configureStore({
    reducer: {
        countStore: countReducer
    }
})

export default store;