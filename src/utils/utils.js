import { getUserData } from "../api/github-api";

export const isUsernameEmpty = (username) => {
  return username === "";
};

export const isAValideUsername = (username) => {
  const result = getUserData(username)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
  return result;
};

export const isOnline = () => {
  return window.navigator.onLine;
};
