import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Character} from "../../models/Character";

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
    }),
});

export const {
    useGetCatalogQuery
} = catalogApi;