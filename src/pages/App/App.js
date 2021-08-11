import { BrowserRouter, Route, Switch } from "react-router-dom";

import Albums from "../Albums/Albums";
import Loader from "../../components/Loader/Loader";
import NavBar from "../../components/NavBar/NavBar";
import Photos from "../Photos/Photos";
import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  padding: 2.5rem 15% 0rem 15%;
  font-size: 2rem;
`;

const App = () => (
  <BrowserRouter>
    <NavBar></NavBar>
    <Layout>
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route path="/albums" component={Albums} />
        <Route path="/profile/:number" />
      </Switch>
      <Loader />
    </Layout>
  </BrowserRouter>
);

export default App;
