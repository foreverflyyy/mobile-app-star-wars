import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/'
    }),
    endpoints: (builder) => ({
        getCatalog: builder.query<any, null>({
            query: () => 'catalog'
        })
    }),
});

export const {
    useGetCatalogQuery
} = catalogApi;