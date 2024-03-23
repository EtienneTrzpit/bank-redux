import { GET_USERPROFILE, EDIT_USERNAME } from "../actions/type.actions";

/* Initial user state */
const initialState = {
  userData: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        userData: action.payload,
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
