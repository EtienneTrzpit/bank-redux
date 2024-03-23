import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer.js";
import { profileReducer } from "./reducers/profile.reducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
