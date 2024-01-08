import Cookies from "js-cookie";

export const createCookie = ({ name, value, expires }) => {
  Cookies.set(name, value, { expires });
};

export const deleteCookie = ({ name }) => {
  Cookies.remove(name);
};

export const updatedCookie = ({ name, value, expires }) => {
  Cookies.set(name, value, { expires });
};

export const readCookie = ({ name }) => {
  return Cookies.get(name);
};
