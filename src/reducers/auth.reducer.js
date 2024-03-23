import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type.actions";
import axios from "axios";
import { loginSuccess, loginFailed } from "../actions/auth.actions";

/* Initial state of authentication */
const initialState = {
  isAuthentificated: false,
  token: null,
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );
      console.log("success fetch");
      dispatch(loginSuccess(response.data.token));
    } catch (error) {
      console.log("error fetch");
      dispatch(loginFailed(error.message));
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
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};
