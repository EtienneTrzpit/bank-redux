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

export const editUsername = (token, username) => {
  console.log(token, username);
  return async (dispatch) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.body, "success edit profile");
      dispatch(updateUsername(response.data.body));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERPROFILE:
      console.log(
        action.payload.userName.userName,
        action.payload.userName.firstName,
        action.payload.userName.lastName
      );
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
