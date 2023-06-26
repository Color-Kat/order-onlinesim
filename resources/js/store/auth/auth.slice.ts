import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUser {
    id: number;
    name: string;
    email: string;
}

const initialState: {
    loading: boolean,
    user: IUser | null,
}  = {
    loading: true,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearUser(state, action) {
            state.user = null;
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
            state.loading = false;
        }
    },
})

export const {
    setUser
} = authSlice.actions;

export const authReducer = authSlice.reducer;