import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import profileUser from "./reducers/profile.reducer";

const store = configureStore({
  reducer: authReducer,
});

export default store;
