import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type.actions";
import axios from "axios";
import { loginSuccess, loginFailed } from "../actions/auth.actions";

/* Initial state of authentication */
const initialState = {
  isAuthentificated: false,
  token: null,
  error: false,
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );
      dispatch(loginSuccess(response.data.body.token));
    } catch (error) {
      dispatch(loginFailed());
    }
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthentificated: true,
        token: action.payload,
      };

    case LOGIN_FAIL: {
      return {
        ...state,
        isAuthentificated: false,
        error: true,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};
