import { GET_USERPROFILE, EDIT_USERNAME } from "./type.actions";

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
