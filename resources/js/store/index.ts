import {configureStore} from "@reduxjs/toolkit";

import {authApi} from "@/store/auth/auth.api.ts";

export const store = configureStore({
   reducer: {
       [authApi.reducerPath]: authApi.reducer,
       // test: testSlice.reducer
   },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        authApi.middleware
    )
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch