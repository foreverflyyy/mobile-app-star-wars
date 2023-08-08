import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Character} from "../../models/interfaces/Character";
import {Film} from "../../models/interfaces/Film";
import {Starship} from "../../models/interfaces/Starship";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api/'
    }),
    endpoints: (builder) => ({
        getCatalog: builder.query<Character[], {page: number}>({
            query: ({page}) => ({
                url: `people`,
                method: 'GET',
                params: {
                    page
                },
            }),
            transformResponse: (response: any) => response.results,
        }),
        getStarships: builder.query<Starship[], {page: number}>({
            query: ({page}) => ({
                url: `starships`,
                method: 'GET',
                params: {
                    page
                },
            }),
            transformResponse: (response: any) => response.results,
        }),
        getFilms: builder.query<Film[], null>({
            query: () => ({
                url: `films`,
                method: 'GET',
            }),
            transformResponse: (response: any) => response.results,
        }),
    }),
});

export const {
    useGetCatalogQuery,
    useGetStarshipsQuery,
    useGetFilmsQuery
} = catalogApi;