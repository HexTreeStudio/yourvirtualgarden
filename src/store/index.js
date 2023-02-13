import { configureStore } from "@reduxjs/toolkit";
import { fieldsReducer } from "./slice/FieldSlice";
import { labelReducer } from "./slice/LabelSlice";

const store = configureStore({
  reducer: {
    fields: fieldsReducer,
    labels: labelReducer,
  },
});

export { store };
