import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    history: [],
    expression: "",
    output: 0,
}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
      setexpression: (state, action) => {
        state.expression += action.payload;
      },
      clearexpression: (state, action) => {
        state.expression = action.payload
        state.output = 0
      },
      evaluate: (state, action) => {
        const final = (fn) => {
          return new Function("return " + fn)();
        }
        state.output = final(state.expression);
      }
    },
  });

  export const { setexpression, clearexpression, evaluate } = calculatorSlice.actions;

  export default calculatorSlice.reducer;