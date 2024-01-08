import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie } from "../../utils/cookies";

const initialState = {
  user: {},
  userLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, { payload }) {
      state.user = { ...payload.user };
      state.userLoggedIn = payload.userLoggedIn;
    },
    logout() {
      deleteCookie("socketAppToken");
      deleteCookie("socketAppRefreshToken");
      setTimeout(() => {
        document.location = "/login";
      }, 1100);
    },
  },
});

export const { setUserInfo, logout } = userSlice.actions;
export default userSlice.reducer;
