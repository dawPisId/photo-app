import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import NavBar from "../../components/NavBar/NavBar";
import Photos from "../Photos/Photos";
import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  padding: 2.5rem 10rem 0rem 10rem;
  font-size:2rem;
`;

const App = () => (
  <BrowserRouter>
    <NavBar></NavBar>
    <Layout>
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route path="/albums" />
        <Route path="/profile/:number" />
      </Switch>
      <Loader/>
    </Layout>
  </BrowserRouter>
);

export default App;
