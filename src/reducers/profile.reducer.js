import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { profile: null, profileInfo: null };

// Créez une action asynchrone avec `createAsyncThunk`
export const profileUserInfo = createAsyncThunk(
  "profile/profileUserInfo",
  async (thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const profileUser = createAsyncThunk(
  "profile/profileUser",
  async (userData, thunkAPI) => {
    console.log("user data: " + userData);
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileUser.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(profileUserInfo.fulfilled, (state, action) => {
        state.profileInfo = action.payload;
      });
  },
});

export const selectProfile = (state) => state.profile;
export default profileSlice.reducer;
