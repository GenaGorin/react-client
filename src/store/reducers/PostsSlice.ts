import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { api } from "../../api/api";
import { toast } from "react-toastify";

export type PostType = {
    id: number;
    title: string;
    content: string;
    image: string;
}

export interface TestState {
    posts: PostType[];
}

const initialState: TestState = {
    posts: [],
};

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    }
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;

export function getPosts() {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await api.getPosts();
            dispatch(setPosts(response.data));
        } catch (e: any) {
            toast(e.message);
        }
    };
}

export async function createPost(data: FormData, successCallback: Function) {
    try {
        const response = await api.createPost(data);
        successCallback()

    } catch (e: any) {
        toast(e.message);
    }
}