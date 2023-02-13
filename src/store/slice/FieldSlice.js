import { createSlice } from "@reduxjs/toolkit";

const fieldsSlice = createSlice({
  name: "fields",
  initialState: [
    {
      id: 0,
      crop: "",
      isWatered: false,
    },
    {
      id: 1,
      crop: "",
      isWatered: false,
    },
    {
      id: 2,
      crop: "",
      isWatered: false,
    },
    {
      id: 3,
      crop: "",
      isWatered: false,
    },
    {
      id: 4,
      crop: "",
      isWatered: false,
    },
    {
      id: 5,
      crop: "",
      isWatered: false,
    },
    {
      id: 6,
      crop: "",
      isWatered: false,
    },
    {
      id: 7,
      crop: "",
      isWatered: false,
    },
    {
      id: 8,
      crop: "",
      isWatered: false,
    },
  ],

  reducers: {
    setCrop(state, action) {
      for (let index = 0; index < state.length; index++) {
        if (state[index].crop === "") {
          state[index].crop = action.payload;
          break;
        }
      }
    },
    setWater(state, action) {
      for (let index = 0; index < state.length; index++) {
        if (state[index].id === action.payload) {
          state[index].isWatered = !state[index].isWatered;
          break;
        }
      }
    },
    resetField(state, action) {
      for (let index = 0; index < state.length; index++) {
        if (state[index].id === action.payload) {
          state[index].isWatered = !state[index].isWatered;
          state[index].crop = "";
          break;
        }
      }
    },
  },
});

export const { setCrop, setWater, resetField } = fieldsSlice.actions;
export const fieldsReducer = fieldsSlice.reducer;
