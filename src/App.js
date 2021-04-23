import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./router/info"

export default function App(){
  return (
      <BrowserRouter>
        <Switch>
          {
            routes.map((route, index) => (
              <Route key = {index} path = {route.path}  render{() => route.layout} />
            ))
          }
        </Switch>
      </BrowserRouter>
  );
};