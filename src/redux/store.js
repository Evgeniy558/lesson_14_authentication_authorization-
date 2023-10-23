// import { filtersReducer, tasksReducer } from "./filters/reducer";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  PAUSE,
} from "redux-persist";
import { tasksReducer } from "./tasks/tasksSlicer";
import { filtersReducer } from "./Slices/filterSlicer";
import { authReducer } from "./auth/authSlice";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);
