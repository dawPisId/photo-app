import { BrowserRouter, Route, Switch } from "react-router-dom";

import Albums from "../Albums/Albums";
import { Layout } from "./App.styled";
import NavBar from "../../components/NavBar/NavBar";
import Photos from "../Photos/Photos";
import Profile from "../Profile/Profile";
import React from "react";

const App: React.FC = () => (
  <BrowserRouter>
    <NavBar></NavBar>
    <Layout>
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route exact path="/albums" component={Albums} />
        <Route path="/albums/:id/photos" component={Photos} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
