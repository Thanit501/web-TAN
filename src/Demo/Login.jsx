import React from "react";
import react, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Demo/Navbar";
import Axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name } = target;
    const value = name === "term" ? target.checked : target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("submit value", input);
    await Axios.post(
      "http://1192.168.0.114:4500/api/Watcher/loginwatcher",
      input
    );
  };

  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-center">Login</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={onSubmit}>
              <div class="mb-3">
                <label for="txtusername" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="txtusername"
                  name="username"
                  onChange={handleChange}
                  placeholder="username"
                />
              </div>
              <div class="mb-3">
                <label for="numpassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="numpassword"
                  name="password"
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
              <br></br>
              <div className="d-grid gap-2 col-2 mx-auto">
                <NavLink
                  to="/Dashborad"
                  className="btn btn-outline-secondary"
                  type="submit"
                >
                  Login
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
