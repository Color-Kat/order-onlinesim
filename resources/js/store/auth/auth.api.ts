import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IUser, setUser} from "./auth.slice.ts";
import {prepareAuthHeader} from "../utils/prepareAuthHeader.ts";

export const authApi = createApi({
    reducerPath: 'auth/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        prepareHeaders: prepareAuthHeader,
        credentials: 'include', // This allows server to set cookies
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        register: builder.mutation<{ user: any, token: string }, {
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
            invalidatesTags: ["User"],
        }),
        login: builder.mutation<{ user: any, token: string }, {
            email: string,
            password: string,
        }>({
            query: (payload) => ({
                url: `login`,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ["User"],
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: `logout`,
                method: 'POST',
            }),
            invalidatesTags: ["User"],
        }),
        getUser: builder.query<IUser, void>({
            query: () => ({
                url: `user`,
                credentials: "include",
            }),
            providesTags: ["User"],
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                // Put user in slice store
                const {data} = await queryFulfilled;
                dispatch(setUser(data))
            }
        }),
    })
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetUserQuery
} = authApi;