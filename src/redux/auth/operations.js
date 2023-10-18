import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post("/users/signup", credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post("users/login", credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
