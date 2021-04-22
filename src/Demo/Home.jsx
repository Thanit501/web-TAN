import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import web from "../Image/home.svg";
import Navbar from "../Demo/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Tracking and Notification
                    <strong className="brand-name"> " TAN "</strong>
                  </h1>
                  <h2 className="my-3">
                    Tracking and Alert Systems For Visual Disability.
                    <br></br>You can see anytime, when person wear it!
                  </h2>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
