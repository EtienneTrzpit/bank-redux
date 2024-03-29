import {
  GET_USERPROFILE,
  EDIT_USERNAME,
  DELETE_USERPROFILE,
} from "./type.actions";

export const userProfile = (userName, firstName, lastName) => {
  return {
    type: GET_USERPROFILE,
    payload: { userName, firstName, lastName },
  };
};

/* Username update action */
export const updateUsername = (username) => {
  return {
    type: EDIT_USERNAME,
    payload: username,
  };
};

/* Delete user profile action */
export const deleteUserProfile = () => {
  return {
    type: DELETE_USERPROFILE,
  };
};
