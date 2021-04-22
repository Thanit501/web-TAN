import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../src/index.css";
import Home from './Demo/Home';
import Login from './Demo/Login';
import Signup from './Demo/Signup';
import Adduser from './Demo/Adduser';
import Navbar from './Demo/Navbar';
import Dashborad from './Demo/Dashborad';
import urlnotfound from './Demo/urlnotfound';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (
    <>
    <Switch>
        <Route  exact  path="/" component={Home} />
        <Route  exact  path="/Login" component={Login} />
        <Route  exact  path="/Signup" component={Signup} />
        <Route  exact  path="/Adduser" component={Adduser} /> 
        <Route  exact  path="/Dashborad" component={Dashborad} />
        <Route  component= {urlnotfound} />
        <Redirect to="/" />  
    </Switch>
    
    </>
  )
};
export default App;
