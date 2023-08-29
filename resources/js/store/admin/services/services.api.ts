import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareAuthHeader} from "../../utils/prepareAuthHeader.ts";
import {ICountry} from "@/types/ICountry.ts";

import {IResponse} from "@/store/types.ts";
import {IService} from "@/types/IService.ts";

export const adminServicesApi = createApi({
    reducerPath: 'api/admin/services',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/admin/',
        prepareHeaders: prepareAuthHeader,
    }),
    tagTypes: ['Services'],
    endpoints: (builder) => ({

        getAllServices: builder.query<IResponse<IService[]>, void>({
            query: () => ({
                url: `services`,
            }),
            providesTags: ["Services"],
        }),

        createService: builder.mutation<IResponse, FormData>({
            query: (payload) => ({
                url: `services/create`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["Services"]
        }),

        // updateCountry: builder.mutation<IResponse, {
        //     id: number,
        //     name: string,
        //     code: string,
        //     short_name: number,
        // }>({
        //     query: (payload) => ({
        //         url: `countries/update`,
        //         method: 'PUT',
        //         body: payload
        //     }),
        //     invalidatesTags: ["Countries"]
        // }),
        // deleteCountry: builder.mutation<IResponse, {
        //     id: number,
        // }>({
        //     query: (payload) => ({
        //         url: `countries/delete`,
        //         method: 'DELETE',
        //         body: payload
        //     }),
        //     invalidatesTags: ["Countries"]
        // }),
    })
});

export const {
    useGetAllServicesQuery,
    useCreateServiceMutation
} = adminServicesApi;