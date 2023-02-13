import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
  name: "sidebar",
  initialState: [
    { crop: "carrot", isLocked: false },
    { crop: "corn", isLocked: true },
    { crop: "pepper", isLocked: true },
    { crop: "wheat", isLocked: true },
  ],
  reducers: {
    unlock(state, action) {
      for (let index = 0; index < state.length; index++) {
        if (state[index].crop === action.payload) state[index].isLocked = false;
      }
    },
  },
});

export const sideBarReducer = SideBarSlice.reducer;
export const { unlock } = SideBarSlice.actions;
