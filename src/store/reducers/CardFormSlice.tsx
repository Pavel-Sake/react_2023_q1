import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { searchTextSlice } from "./SearchTextSlice";

interface IFormCard {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  imgFile: string | null;
  consent: boolean;
}

const initialState: { cards: IFormCard[] } = {
  cards: [],
};

export const cardFormSlice = createSlice({
  name: "cardForm",
  initialState,
  reducers: {
    addCardForm: (state, action: PayloadAction<IFormCard>) => {
      state.cards.push(action.payload);
    },
  },
});

export default cardFormSlice.reducer;
