"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice";
import sidebarReudcer from "./Features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarReudcer,
  },
});
