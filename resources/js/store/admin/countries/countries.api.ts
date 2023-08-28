import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareAuthHeader} from "../../utils/prepareAuthHeader.ts";
import {ICountry} from "@/types/ICountry.ts";

import {IResponse} from "@/store/types.ts";

export const adminCountriesApi = createApi({
    reducerPath: 'api/admin/countries',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/admin/',
        prepareHeaders: prepareAuthHeader,
    }),
    tagTypes: ['Countries'],
    endpoints: (builder) => ({

        getAllCountries: builder.query<IResponse<ICountry[]>, void>({
            query: () => ({
                url: `countries`,
            }),
            providesTags: ["Countries"],
        }),

        createCountry: builder.mutation<IResponse, {
            name: string,
            code: string,
            short_name: string,
        }>({
            query: (payload) => ({
                url: `countries/create`,
                method: 'POST',
                keepUnusedData: false,
                body: payload
            }),
            invalidatesTags: ["Countries"]
        }),
    })
});

export const {
    useGetAllCountriesQuery,
    useCreateCountryMutation
} = adminCountriesApi;