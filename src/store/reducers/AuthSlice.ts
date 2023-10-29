import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { api } from "../../api/api";
import { LoginType } from "../../components/AuthForm/AuthForm";
import { toast } from 'react-toastify';

export interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: null,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        removeToken: (state) => {
            state.token = null;
        }
    }
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;

export function login(data: LoginType, successCallback: Function) {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await api.login(data);
            dispatch(setToken(response.data));
            successCallback();
        } catch (e: any) {
            toast(e.message);
        }
    };
}

export function registration(data: LoginType, successCallback: Function) {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await api.registration(data);
            dispatch(setToken(response.data));
            successCallback();
        } catch (e: any) {
            toast(e.message);
        }
    };
}