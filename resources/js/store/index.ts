import {configureStore} from "@reduxjs/toolkit";

import {authApi} from "@/store/auth/auth.api.ts";
import {authReducer} from "@/store/auth/auth.slice.ts";
import {adminCountriesApi} from "@/store/admin/countries/countries.api.ts";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminCountriesApi.reducerPath]: adminCountriesApi.reducer,
        auth: authReducer,
        // test: testSlice.reducer
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        authApi.middleware,
        adminCountriesApi.middleware,
    )
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch