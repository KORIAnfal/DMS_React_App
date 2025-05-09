import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import fileUploadReducer from "./fileUploadSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    fileUpload: fileUploadReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
