import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareAuthHeader} from "../utils/prepareAuthHeader.ts";
import {IResponse} from "@/store/types.ts";

export const walletApi = createApi({
    reducerPath: 'wallet/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        prepareHeaders: prepareAuthHeader,
    }),
    endpoints: (builder) => ({
        increaseBalance: builder.mutation<IResponse, {
            amount: number,
        }>({
            query: (payload) => ({
                url: `increase-balance`,
                method: 'POST',
                body: payload
            }),
        }),
    })
});

export const {
    useIncreaseBalanceMutation
} = walletApi;