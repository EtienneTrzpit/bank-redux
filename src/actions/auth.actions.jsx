import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type.actions";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAIL,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
