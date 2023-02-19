import { createSlice } from "@reduxjs/toolkit";

// initial State
const initialState = {
  // Check the Localstarage than any card is present and set it into the initial state, If there is no data present then set it to empty array.
  flashcards: localStorage.getItem("flashcards")
    ? JSON.parse(localStorage.getItem("flashcards"))
    : [],
};
const updateLocalStorage = (arr) => {
  localStorage.setItem("flashcards", JSON.stringify(arr));
}
export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    //add New Flashcards to the store
    addFlashCard: (state, action) => {
      state.flashcards.push({
        card: action.payload,
      });
      // after adding the card to the store then also add to the localstorage
      updateLocalStorage(state.flashcards)
    },

    deleteFlashCard: (state, action) => {
      //console.log(action)

      //delete flashcard from store and localstorage
      const fcard = state.flashcards.filter(ele => {
        if (ele.card.group_id === action.payload.group_id && ele.card.group_name === action.payload.group_name) {
          return ele.card.group_name !== action.payload.group_name;
        }
        return ele;
      });
      return { ...state, flashcards: fcard };

    },

    //update the state of localstorage
    updateState: (state, action) => {
      updateLocalStorage(state.flashcards);
    }

  },
});

export const { addFlashCard, deleteFlashCard, updateState } = flashcardSlice.actions;


export default flashcardSlice.reducer;
