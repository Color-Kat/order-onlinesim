import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IUser} from "./auth.slice.ts";
import {prepareAuthHeader} from "../utils/prepareAuthHeader.ts";

export const authApi = createApi({
    reducerPath: 'auth/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: prepareAuthHeader,
        credentials: 'include', // This allows server to set cookies
    }),
    endpoints: (builder) => ({
        register: builder.mutation<{user: any, token: string}, {
            name: string,
            email: string,
            password: string,
            password_confirmation: string,
        }>({
            query: (payload) => ({
                url: `register`,
                method: 'POST',
                body: payload
            }),
        }),
        login: builder.mutation<{user: any, token: string}, {
            email: string,
            password: string,
        }>({
            query: (payload) => ({
                url: `login`,
                method: 'POST',
                body: payload,
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: `logout`,
                method: 'POST',
            }),
        }),
        getUser: builder.query<IUser, void>({
            query: () => ({
                url: `user`,
            }),
        }),

    })
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetUserQuery
} = authApi;