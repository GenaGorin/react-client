import axios from "axios";
import { LoginType } from "../components/AuthForm/AuthForm";

const nestApp = axios.create({
    baseURL: "http://localhost:5000/",
});

export const setToken = (token: string | null) => {
    nestApp.defaults.headers.common.Authorization = "Bearer " + token;
    return token;
};

export const api = {
    login(loginData: LoginType) {
        return nestApp.post("/auth/login", loginData);
    },
    registration(loginData: LoginType) {
        return nestApp.post("/auth/registration", loginData);
    },
    getPosts() {
        return nestApp.get("/posts")
    },
    createPost(data: FormData) {
        return nestApp.post("/posts", data);
    }
};