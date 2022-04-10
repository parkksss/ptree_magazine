import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { PostList, Login, Signup } from "../pages/pages";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;