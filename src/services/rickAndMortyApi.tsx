import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacterCard } from "../interfaces/ICharacterCard";

const BASE_URL = "https://rickandmortyapi.com/api";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `/character/?name=${name}`,
    }),
  }),
});
