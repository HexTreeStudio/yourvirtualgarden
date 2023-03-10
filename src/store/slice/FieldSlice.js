import { createSlice } from "@reduxjs/toolkit";

const fieldsSlice = createSlice({
  name: "fields",
  initialState: [
    {
      id: 0,
      crop: "",
      isWatered: false,
      isGrowing: false,
      growStage: 0,
    },
    {
      id: 1,
      crop: "",
      isWatered: false,
      isGrowing: false,
    },
    {
      id: 2,
      crop: "",
      isWatered: false,
      isGrowing: false,
    },
    {
      id: 3,
      crop: "",
      isWatered: false,
      isGrowing: false,
    },
    {
      id: 4,
      crop: "",
      isWatered: false,
      isGrowing: false,
    },
    {
      id: 5,
      crop: "",
      isWatered: false,
      isGrowing: false,
    },
    {
      id: 6,
      crop: "",
      isWatered: false,
      isGrowing: false,
    },
    {
      id: 7,
      crop: "",
      isWatered: false,
      isGrowing: false,
    },
    {
      id: 8,
      crop: "",
      isWatered: false,
      isGrowing: false,
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
    setGrowing(state, action) {
      for (let index = 0; index < state.length; index++) {
        if (state[index].id === action.payload) {
          state[index].isGrowing = !state[index].isGrowing;
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

export const { setCrop, setWater, resetField, setGrowing } =
  fieldsSlice.actions;
export const fieldsReducer = fieldsSlice.reducer;
