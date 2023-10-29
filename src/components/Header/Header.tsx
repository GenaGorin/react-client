import { Header } from "antd/es/layout/layout";
import styles from './Header.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/Routes";
import { useAppDispatch } from "../../hooks/redux";
import { removeToken } from "../../store/reducers/AuthSlice";

type HeaderType = {
    token: string | null;
}

const AppHeader = ({ token }: HeaderType) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logoutHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        dispatch(removeToken());
        navigate(ROUTES.login);
    }

    return <Header className={styles.header} >
        {token
            ? <>
                <NavLink to={ROUTES.posts} >Посты</NavLink>
                <NavLink to={ROUTES.createPost} >Создать пост</NavLink>
                <a onClick={logoutHandler} >Выйти</a>
            </>
            : <>
                <NavLink to={ROUTES.login} >Войти</NavLink>
                <NavLink to={ROUTES.register} >Регистрация</NavLink>
            </>

        }
    </Header>
}

export default AppHeader;