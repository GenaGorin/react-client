import { useNavigate } from "react-router-dom";
import AuthForm, { LoginType } from "../../components/AuthForm/AuthForm";
import { useAppDispatch } from "../../hooks/redux";
import { registration } from "../../store/reducers/AuthSlice";
import { ROUTES } from "../../router/Routes";

const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const registerHandler = (values: LoginType) => {
        dispatch(registration(values, () => navigate('/' + ROUTES.posts)));
    };
    return <div>
        <h1>Регистрация</h1>
        <AuthForm successCallback={registerHandler} buttonText="Зарегистрироваться" />
    </div>
}

export default RegisterPage;