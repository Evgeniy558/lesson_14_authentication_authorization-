import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URLTASKS = "https://6527b607931d71583df13aa7.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${URLTASKS}/tasks`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkApi) => {
    try {
      const responce = await axios.post(`${URLTASKS}/tasks`, { text });
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (task, thunkAPI) => {
    try {
      const responce = await axios.delete(`${URLTASKS}/tasks/${task.id}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const responce = await axios.put(`${URLTASKS}/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
