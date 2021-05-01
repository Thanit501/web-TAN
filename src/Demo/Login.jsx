import React from "react";
import react, { useState } from "react";
import { NavLink } from "react-router-dom";
import { swap, useFormik } from "formik";
import * as yup from "yup";
import Navbar from "../Demo/Navbar";
import axios from "axios";
import Swal from "sweetalert2";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
    },
    ValidationSchema: yup.object({
      user_name: yup
        .string()
        .strict()
        .trim()
        .required("This field is required"),

      password: yup.string().min(4).max(5).required("This field is required"),
    }),

    onSubmit: async (data) => {
      console.log(data);
      try {
        let response = await axios.post(
          "http://192.168.0.110:4500/api/Watcher/loginwatcher",
          data
        );
        console.log(response.data);
        localStorage.setItem("Token", response.data);
        console.log(localStorage.getItem("Token", response.data));

        props.history.push("/Dashborad");
      } catch (err) {
        alert("Oops, Something went wrong!");
        // Swal("Oops", "Something went wrong!", "error");
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-center">Login</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="txtusername" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="txtusername"
                  name="mail"
                  onChange={formik.handleChange}
                  placeholder="name@example.com"
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
                  onChange={formik.handleChange}
                  placeholder="password"
                />
              </div>
              <br></br>
              <div className="d-grid gap-2 col-2 mx-auto">
                <button
                  to="/Dashborad"
                  className="btn btn-outline-secondary"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
