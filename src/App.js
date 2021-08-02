import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import Applications from './pages/Applications'

function App() {
  return (
    <Switch>
      <Route extact path = "/" component ={Homepage}/>
      <Route extact path = "/applications" component ={Applications}/>
    </Switch>
  );
}

export default App;
