import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignForm from "../components/signlogin/SignForm";

class Sign extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <SignForm></SignForm>
                <Footer></Footer>
            </div>
        );
    }
}

export default Sign;