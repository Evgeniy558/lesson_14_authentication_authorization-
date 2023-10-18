import { createSlice } from "@reduxjs/toolkit";

import { addTask, deleteTask, fetchTasks, toggleCompleted } from "../operation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,

    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handlePending,

    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handlePending,

    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handlePending,
  },

  // const isPendingAction = (action) => {
  //     return action.type.endsWith("/pending");
  // }

  // const isRejectAction = (action) => {
  //     return action.type.endsWith("/rejected")
  // }

  // extraReducers: (builder) => {
  //   builder
  //             // .addCase(fetchTasks.pending, handlePending)
  //       // .addCase(addTask.pending, handlePending)
  //       // .addCase(deleteTask.pending, handlePending)
  //       // .addCase(toggleCompleted.pending, handlePending)
  //       // .addCase(fetchTasks.rejected, handleRejected)
  //       // .addCase(addTask.rejected, handleRejected)
  //       // .addCase(deleteTask.rejected, handlePending)
  //       // .addCase(toggleCompleted.rejected, handleRejected)
  //       .addCase(fetchTasks.fulfilled, (state, action) => {
  //           state.isLoading = false;
  //           state.error = null;
  //           state.items = action.payload;
  //       })
  //       .addCase(addTask.fulfilled, (state, action) => {
  //           state.isLoading = false;
  //           state.error = null;
  //           state.items.push(action.payload)
  //       })
  //       .addCase(toggleCompleted.fulfilled, (state, action) => {
  //           state.isLoading = false;
  //           state.error = null;
  //           const index = state.items.findIndex(
  //               task => task.id === action.payload.id
  //           );
  //           state.items[index].completed = !state.items[index].completed
  //       })
  //       .addCase(deleteTask.fulfilled, (state, action) => {
  //           state.isLoading = false;
  //           state.error = null;
  //           const index = state.items.findIndex(
  //             (task) => task.id === action.payload
  //           );
  //           state.items.splice(index, 1);
  //         })
  //       .addMatcher(isPendingAction, handlePending)
  //       .addMatcher(isRejectAction, handleRejected)
  //       .addDefaultCase((state, action) => {state.error = "someone use old function, fix it!"})
  // }
});

export const tasksReducer = tasksSlice.reducer;
