import { configureStore } from "@reduxjs/toolkit";
import { reducer as todoReducer } from "./features/TodoSlice";
import { reducer as visibilityFilterReducer } from "./features/VisibilityFilters";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    visibilityFilter: visibilityFilterReducer,
  },
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
