import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import LoginForm from "../components/signlogin/LoginForm";

import ".././App.css";

const Login = () => {
    return (
        <div>
            <Header></Header>
            <LoginForm></LoginForm>
            
            <Footer></Footer>
        </div>
);
};

export default Login;
