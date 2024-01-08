import axios from "axios";
import store from "../Redux/store";
import { logout } from "../Redux/slices/userSlice";
import { readCookie } from "../utils/cookies";

const instance = axios.create({
  baseURL: "https://socket-app-lgus.onrender.com/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${readCookie("socketAppToken")}`,
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default instance;
