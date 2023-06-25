import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUser {
    id: number;
    name: string;
    email: string;
}

const initialState: {
    loading: boolean,
    user: IUser | null,
    token: string | null
}  = {
    loading: false,
    user: null,
    token: localStorage.getItem("ACCESS_TOKEN"),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{
            user: IUser,
            token: string
        }>) {
            state.user = action.payload.user;
            state.token = action.payload.token;

            localStorage.setItem("ACCESS_TOKEN", action.payload.token);
        }
    },
})

export const {
    setUser
} = authSlice.actions;
export const authReducer = authSlice.reducer;