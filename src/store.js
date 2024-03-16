import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import profileUser from "./reducers/profile.reducer";
import counterReducer from "./reducers/conter.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
