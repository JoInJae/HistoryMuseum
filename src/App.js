import React, {Suspense} from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Info from "./config/route"

export default function App(){
  return(
      <BrowserRouter>
        <Switch>
            <Suspense fallback={<div>Lording...</div>}>
            <Route exact path={"/"} render={() => (<Redirect  to={"/data/list"}/>)}/>
            {
                Info.map((e,index)=>
                    <Route key={index} path={e.path} render={() => (e.layout)} />
                )
            }
            </Suspense>
        </Switch>
      </BrowserRouter>
  );
};
