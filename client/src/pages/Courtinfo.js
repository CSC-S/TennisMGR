/*eslint-disable*/
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "../components/views/Landing/LandingPage";

import ".././App.css";

const Store = () => {
    return (
        <div>
            <Header></Header>
            <LandingPage></LandingPage>
            <Footer></Footer>
        </div>
);
};

export default Store;