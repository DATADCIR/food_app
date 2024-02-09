"use client";

import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Features/login/loginSlice";
import sidebarReudcer from "./Features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    sidebar: sidebarReudcer,
  },
});
