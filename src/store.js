import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from './features/calculatorSlice';


const store = configureStore({
    reducer: {
        calculator: calculatorReducer
    }
})

export default store;