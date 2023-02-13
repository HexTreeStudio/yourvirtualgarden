import { configureStore } from "@reduxjs/toolkit";
import { fieldsReducer } from "./slice/FieldSlice";
import { labelReducer } from "./slice/LabelSlice";
import { sideBarReducer } from "./slice/SideBarSlice";

const store = configureStore({
  reducer: {
    fields: fieldsReducer,
    labels: labelReducer,
    sidebar: sideBarReducer,
  },
});

export { store };
