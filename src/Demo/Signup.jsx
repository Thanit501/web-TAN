import React from "react";
import react, { Component } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// import react, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Demo/Navbar";
import Axios from "axios";
import axios from "axios";

const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    ValidationSchema: yup.object({
      username: yup.string().strict().trim().required("This field is required"),
      email: yup
        .string()
        .email("Enter Valid Email Address")
        .strict()
        .trim()
        .required("This field is required"),
      password: yup.string().strict().trim().required("This field is required"),
    }),

    onSubmit: (data) => {
      console.log(data);
      axios
        .post("http://localhost:4500/api/Watcher/create", data)
        .then((res) => {
          console.log(res);
          console.log(res.data);

          // props.history.push(./)
        });
    },
  });

  // const [input, setInput] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { target } = e;
  //   const { name } = target;
  //   const value = name === "term" ? target.checked : target.value;

  //   setInput({
  //     ...input,
  //     [name]: value,
  //   });
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log("submit value", input);
  //   await Axios.post("http://localhost:4500/api/Watcher/create", {
  //     username: input.username,
  //     email: input.email,
  //     password: input.password
  //   })
  //   .then(res => {

  //   })
  // };

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
                  name="username"
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
                  name="email"
                  onChange={formik.handleChange}
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
