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

        getAllServices: builder.query<IResponse<{
            services: IService[],
            countries: ICountry[]
        }>, void>({
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

        updateService: builder.mutation<IResponse, FormData>({
            query: (payload) => ({
                url: `services/update`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["Services"]
        }),

        deleteService: builder.mutation<IResponse, {
            id: number,
        }>({
            query: (payload) => ({
                url: `services/delete`,
                method: 'DELETE',
                body: payload
            }),
            invalidatesTags: ["Services"]
        }),
    })
});

export const {
    useGetAllServicesQuery,
    useCreateServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation
} = adminServicesApi;