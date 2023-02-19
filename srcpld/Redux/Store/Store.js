import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "../../Redux/Reducer/flashcardSlice";
//import { legacy_createStore as createStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
  },
});
