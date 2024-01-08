import HttpClient from "./httpClient";

export const loginUser = async ({ email, password }) => {
  return HttpClient.post("/users/login", {
    email,
    password,
  });
};

export const signupUser = ({ username, email, password, passwordConfirm }) => {
  return HttpClient.post("/users/signup", {
    username,
    email,
    password,
    passwordConfirm,
  });
};
