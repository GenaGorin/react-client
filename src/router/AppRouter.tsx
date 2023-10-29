import { Navigate, useRoutes } from "react-router-dom";
import { ROUTES } from "./Routes";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage";

type AppRouterType = {
    token: string | null;
}

const AppRouter = ({ token }: AppRouterType) => {


    const Router = () => {
        const routes = token
            ? [
                {
                    path: '/',
                    element: <Navigate to={ROUTES.posts} ></Navigate>
                },
                {
                    path: ROUTES.posts,
                    element: <PostsPage />
                },
                {
                    path: ROUTES.createPost,
                    element: <CreatePostPage />
                }
            ]
            : [
                {
                    path: '/',
                    element: <Navigate to={ROUTES.login} ></Navigate>
                },
                {
                    path: ROUTES.login,
                    element: <LoginPage />
                },
                {
                    path: ROUTES.register,
                    element: <RegisterPage />
                }
            ]
        let element = useRoutes(routes);

        return element;
    };


    return <div>
        <Router />
    </div>
}

export default AppRouter;