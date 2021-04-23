import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main";
import Category from "../pages/category";
import Login from "../pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render = {() => <Main name={"메인"}/>}/>
        <Route path="/add" component={Main} />
        <Route path="/category" component={Category} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
