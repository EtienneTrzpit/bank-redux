import { GET_USERPROFILE, EDIT_USERNAME } from "../actions/type.actions";
import axios from "axios";
import { userProfile } from "../actions/profile.actions";
import { updateUsername } from "../actions/profile.actions";

/* Initial user state */
const initialState = {
  userName: null,
  firstName: null,
  lastName: null,
};

export const profileUser = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(userProfile(response.data.body));
    } catch (error) {
      dispatch(userProfile(error.message));
    }
  };
};

const API_BASE_URL = "http://localhost:3001/api/v1";
const api = axios.create({ baseURL: API_BASE_URL });

export const updateUserProfileApi = async (userData, token) => {
  return api.put("/user/profile", userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const editUsername = (token, username) => {
  return async (dispatch) => {
    try {
      const response = await updateUserProfileApi(
        { userName: username },
        token
      );
      dispatch(updateUsername(response.data.body.userName));
    } catch (error) {
      dispatch(updateUsername(error.message));
    }
  };
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        userName: action.payload.userName.userName,
        firstName: action.payload.userName.firstName,
        lastName: action.payload.userName.lastName,
      };
    case EDIT_USERNAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
