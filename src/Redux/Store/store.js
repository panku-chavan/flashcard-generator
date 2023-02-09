import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "../ReducerSlice/flashcardSlice";

// The global store creared for the application, which has Reducers
export const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
  },
});
