import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employeeSlice";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;
