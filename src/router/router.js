import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainLayout from "../pages/MainLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainLayout} />
        <Route exact path="/category" component={MainLayout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
