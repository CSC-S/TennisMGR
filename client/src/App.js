/*eslint-disable*/
import React, { useReducer, useRef, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

import Main from "./pages/Main";
import Store from "./pages/Store";
import Courtinfo from "./pages/Courtinfo";
import ContestBoard from "./pages/ContestBoard";
import Sign from "./pages/Sign";
import Login from "./pages/Login";
import "./App.css";
import pageo from "./components/pageo";
import pageo1 from "./components/pageo1";
import pageo2 from "./components/pageo2";
import pageo3 from "./components/pageo3";
import pageo4 from "./components/pageo4";
import pageo5 from "./components/pageo5";
import pageo6 from "./components/pageo6";
import pageo7 from "./components/pageo7";
import pageo8 from "./components/pageo8";

function App() {

  return (
    <Switch>
      <Route path="/" component={Main} exact={true} />
      <Route path="/Courtinfo" component={Courtinfo} />
      <Route path="/store" component={Store} />
      <Route path="/ContestBoard" component={ContestBoard} />
      <Route path="/sign" component={Sign} />
      <Route path="/login" component={Login} />
      <Route path="/pageo" component={pageo} />
      <Route path="/pageo1" component={pageo1} />
      <Route path="/pageo2" component={pageo2} />
      <Route path="/pageo3" component={pageo3} />
      <Route path="/pageo4" component={pageo4} />
      <Route path="/pageo5" component={pageo5} />
      <Route path="/pageo6" component={pageo6} />
      <Route path="/pageo7" component={pageo7} />
      <Route path="/pageo8" component={pageo8} />
    </Switch>
  );
}

export default App;
