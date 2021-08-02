import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Applications from "../pages/Applications";
import Homepage from "../pages/Homepage";
import Cohorts from "../pages/Cohorts";
import thankYou from "../pages/thankYou";

const Routes = () => {
  return (
    
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cohorts" component={Cohorts} />
      <Route exact path="/applications" component={Applications} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/thankYou" component={thankYou} />
      
    </Switch>
    
  );
};

export default Routes;