import { useNavigate } from "react-router-dom";
import AuthForm, { LoginType } from "../../../components/AuthForm/AuthForm";
import { useAppDispatch } from "../../../hooks/redux";
import { login } from "../../../store/reducers/AuthSlice";
import { ROUTES } from "../../../router/Routes";

const AuthFormContainer = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginHandler = (values: LoginType) => {
        dispatch(login(values, () => navigate('/' + ROUTES.posts)));
    };

    return <AuthForm successCallback={loginHandler} buttonText="Войти" />
}

export default AuthFormContainer;