import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Response} from "../../models/interfaces/Response";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api/'
    }),
    endpoints: (builder) => ({
        getCharactersByQuery: builder.query<Response, { query: string, page: number }>({
            query: ({query, page}) => ({
                url: 'people',
                method: 'GET',
                params: {
                    search: query,
                    page
                }
            }),
        }),
        getStarshipsByQuery: builder.query<Response, { query: string, page: number }>({
            query: ({query, page}) => ({
                url: 'starships',
                method: 'GET',
                params: {
                    search: query,
                    page
                }
            }),
        }),
        getFilms: builder.query<Response, null>({
            query: () => ({
                url: `films`,
                method: 'GET',
            }),
            transformResponse: (response: any) => response.results,
        }),
    }),
});

export const {
    useGetCharactersByQueryQuery,
    useGetStarshipsByQueryQuery,
    useGetFilmsQuery
} = catalogApi;