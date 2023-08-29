import {configureStore} from "@reduxjs/toolkit";

import {authApi} from "@/store/auth/auth.api.ts";
import {authReducer} from "@/store/auth/auth.slice.ts";
import {adminCountriesApi} from "@/store/admin/countries/countries.api.ts";
import {adminServicesApi} from "@/store/admin/services/services.api.ts";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminCountriesApi.reducerPath]: adminCountriesApi.reducer,
        [adminServicesApi.reducerPath]: adminServicesApi.reducer,
        auth: authReducer,
        // test: testSlice.reducer
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        authApi.middleware,
        adminCountriesApi.middleware,
        adminServicesApi.middleware,
    )
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch