import { createSlice } from "@reduxjs/toolkit";

const labelSlice = createSlice({
  name: "labels",
  initialState: [
    { name: "carrot", value: 0 },
    { name: "wheat", value: 0 },
    { name: "corn", value: 0 },
    { name: "pepper", value: 0 },
  ],
  reducers: {
    setValue(state, action) {
      for (let index = 0; index < state.length; index++) {
        if (state[index].name === action.payload) {
          state[index].value += 1;
        }
      }
    },
  },
});

export const labelReducer = labelSlice.reducer;
export const { setValue } = labelSlice.actions;
