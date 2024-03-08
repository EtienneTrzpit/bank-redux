import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { profile: null };

// Créez une action asynchrone avec `createAsyncThunk`
export const profileUser = createAsyncThunk(
  "profile/profileUser",
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

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(profileUser.fulfilled, (state, action) => {
      state.profile = action.payload.body;
    });
  },
});

export const selectProfile = (state) => state.profile;
export default profileSlice.reducer;
