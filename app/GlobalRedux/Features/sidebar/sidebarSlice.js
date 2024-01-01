"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.value = !state.value;
    },
    closeSidebar: (state) => {
      state.value = false;
    },
    openSidebar: (state) => {
      state.value = true;
    },
  },
});

export const { toggleSidebar, closeSidebar, openSidebar } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
