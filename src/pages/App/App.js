import { BrowserRouter, Route, Switch } from "react-router-dom";

import Albums from "../Albums/Albums";
import NavBar from "../../components/NavBar/NavBar";
import Photos from "../Photos/Photos";
import Profile from "../Profile/Profile"
import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  padding: 2.5rem 15% 10rem 15%;
  font-size: 2rem;
`;

const App = () => (
  <BrowserRouter>
    <NavBar></NavBar>
    <Layout>
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route exact path="/albums" component={Albums} />
        <Route path="/albums/:id/photos" component={Photos} />
        <Route path="/profile/:id" component={Profile}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;