import {configureStore} from "@reduxjs/toolkit";

import {authApi} from "@/store/auth/auth.api.ts";
import {authReducer} from "@/store/auth/auth.slice.ts";
import {adminCountriesApi} from "@/store/admin/countries/countries.api.ts";
import {adminServicesApi} from "@/store/admin/services/services.api.ts";
import {walletApi} from "@/store/wallet/wallet.api.ts";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,

        [walletApi.reducerPath]: walletApi.reducer,

        [adminCountriesApi.reducerPath]: adminCountriesApi.reducer,
        [adminServicesApi.reducerPath]: adminServicesApi.reducer,

        // test: testSlice.reducer
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        authApi.middleware,
        walletApi.middleware,

        adminCountriesApi.middleware,
        adminServicesApi.middleware,
    )
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch