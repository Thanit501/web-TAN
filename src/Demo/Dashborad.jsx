import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Component/Sidebar/Sidebar";
import Navbar from "../Component/Navbar/Navbar";
import "../Component/Sidebar/Sidebar.css";
import "../Component/Navbar/Navbar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "../Demo/Profile";
import User from "../Demo/User";
import View from "../Demo/View";
const Dashborad = () => {
  return (
    <>
      <Router>
        <Navbar />

        <div className="flex">
          <Sidebar />
          <div className="content">
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/User" component={User} />
            <Route exact path="/View" component={View} />
          </div>
        </div>
      </Router>
    </>
  );
};
export default Dashborad;
