import { configureStore } from "@reduxjs/toolkit";
import { poststReducer } from "./slices/post";
import { authReducer } from "./slices/auth";

const store = configureStore({
  reducer: {
    posts: poststReducer,
    auth: authReducer,
  }
})

export default store