import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchTextReducer from "./reducers/SearchTextSlice"

const rootReducer = combineReducers({
  searchTextReducer: searchTextReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
