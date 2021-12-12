import Header from "../components/Header";
import Footer from "../components/Footer";

import ".././App.css";
import React from "react";
import LoginForm from "../components/signlogin/LoginForm";

class Login extends React.Component{
    render(){
        return(
        <div>
            <Header></Header>
            <LoginForm></LoginForm>
            <Footer></Footer>
        </div>
        );
    }
}

export default Login;
