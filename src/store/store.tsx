import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchTextReducer from "./reducers/SearchTextSlice";
import cardForm from "./reducers/CardFormSlice"
import { rickAndMortyApi } from "../services/rickAndMortyApi";

const rootReducer = combineReducers({
  searchTextReducer: searchTextReducer,
  cardForm: cardForm,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];