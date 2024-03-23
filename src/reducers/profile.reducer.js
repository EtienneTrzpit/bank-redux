import { GET_USERPROFILE, EDIT_USERNAME } from "../actions/type.actions";
import axios from "axios";
import { userProfile } from "../actions/profile.actions";

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
      console.log(response.data.body, "success get profile");
      dispatch(userProfile(response.data.body));
    } catch (error) {
      dispatch(userProfile(error.message));
    }
  };
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case EDIT_USERNAME:
      return {
        ...state,
        userData: {
          ...state.userData,
          username: action.payload,
        },
      };
    default:
      return state;
  }
};
