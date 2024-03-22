import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import profileUser from "./reducers/profile.reducer";
import counterReducer from "./reducers/conter.reducer";

const store = configureStore({
  reducer: profileUser,
});

export default store;
