import { useEffect } from 'react';
import { Layout } from "antd";
import { useAppSelector } from "./hooks/redux";
import { Content, Footer } from "antd/es/layout/layout";
import AppHeader from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import './App.css';
import AppFooter from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setToken } from "./api/api";


function App() {
  let token = useAppSelector(state => state.authSlice.token);

  useEffect(() => {
    setToken(token);
  }, [token]);

  return (
    <BrowserRouter>
      <Layout className="layout" >
        <AppHeader token={token} />
        <Content className="content" >
          <AppRouter token={token} />
        </Content>
        <AppFooter />
      </Layout >
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
