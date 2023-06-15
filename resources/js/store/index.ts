import {configureStore} from "@reduxjs/toolkit";

import {testApi} from "@/store/test/test.api";
import {testSlice} from "@/store/test/test.slice";

export const store = configureStore({
   reducer: {
       [testApi.reducerPath]: testApi.reducer,
       test: testSlice.reducer
   },
    // middleware: getDefaultMiddleware => getDefaultMiddleware.concat(api.middleware())
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch