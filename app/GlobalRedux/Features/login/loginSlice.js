"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: true,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    access: (state) => {
      state.login = true;
    },
    deniAccess: (state) => {
      state.login = false;
    },
  },
});

export const { access, deniAccess } = loginSlice.actions;
export const login = (state) => state.login.login;
export default loginSlice.reducer;
