import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const { } = userSlice.actions;

export default userSlice.reducer;
