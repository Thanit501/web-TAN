import React from "react";
import react, { Component } from "react";
import { useFormik, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import react, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../Demo/Navbar";
import Swal from "sweetalert2";

const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      user_name: "",
      mail: "",
      password: "",
    },

    ValidationSchema: yup.object({
      user_name: yup
        .string()
        .strict()
        .trim()
        .required("This field is required"),
      mail: yup
        .string()
        .email("Enter Valid Email Address")
        .strict()
        .trim()
        .required("This field is required"),
      password: yup.string().min(4).max(10).required("This field is required"),
    }),

    onSubmit: async (data) => {
      console.log(data);

      try {
        let response = await axios.post(
          "http://192.168.0.110/api/Watcher/Create",
          data
        );
        console.log(response);
        props.history.push("./Adduser");
      } catch (err) {
        alert("email exists");
      }

      // Swal({
      //   title: "Fields Empty!!",
      //   text: "Please check the missing field!!",
      //   icon: "warning",
      //   button: "Ok",
      // });
    },
  });

  // props.history.push(./)

  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-center">Sign up</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="txtusername" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="txtusername"
                  placeholder="username"
                  name="user_name"
                  onChange={formik.handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="txtemail" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="txtemail"
                  placeholder="name@example.com"
                  name="mail"
                  onChange={formik.handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="numpassword" class="form-label">
                  Password
                </label>
                <input
                  required
                  type="password"
                  class="form-control"
                  id="numpassword"
                  placeholder="password"
                  name="password"
                  onChange={formik.handleChange}
                />
              </div>
              <br></br>
              <div className="d-grid gap-2 col-2 mx-auto">
                <button
                  to="/Adduser"
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="submit"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
