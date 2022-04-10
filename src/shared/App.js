import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { PostList, Login, Signup } from "../pages/pages";
import { Header } from "../components/components";
import { Grid } from '../elements/elements';

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Route path="/" exact component={PostList}/>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup}/>
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;