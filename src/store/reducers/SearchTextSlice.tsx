import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface ISearchTextState {
  text: string;
}

const initialState: ISearchTextState = {
  text: "",
};

export const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    searchCard: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export default searchTextSlice.reducer;
