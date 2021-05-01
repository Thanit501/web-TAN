import React from "react";
import react, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Navbar from "../Demo/Navbar";
import axios from "axios";

const Adduser = (props) => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      gender: "",
      age: "",
    },
    ValidationSchema: yup.object({
      first_name: yup
        .string()
        .strict()
        .trim()
        .required("This field is required"),

      last_name: yup
        .string()
        .strict()
        .trim()
        .required("This field is required"),
      gender: yup.string().strict().trim().required("This field is required"),
      age: yup.string().strict().trim().required("This field is required"),
    }),

    onSubmit: (data) => {
      console.log(data);
      try {
        let response = axios.post(
          "http://localhost:4500/api/Blind/create",
          data
        );
        console.log(response);
        props.history.push("./Dashborad");
      } catch (err) {
        alert("email exists");
      }

      // props.history.push(./)
    },
  });

  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-center">Add Users</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-3">
                <label for="txtfirstname" class="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="txtfirstname"
                  placeholder="firstname"
                  name="first_name"
                  onChange={formik.handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="txtlastname" class="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="txtlastname"
                  placeholder="lastname"
                  name="last_name"
                  onChange={formik.handleChange}
                />
              </div>

              <div>
                <label class="form-check" class="form-label">
                  Gender
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="flexRadioDefault1"
                    onChange={formik.handleChange}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Female
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="flexRadioDefault2"
                    onChange={formik.handleChange}
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Male
                  </label>
                </div>
              </div>

              <div class="mb-3">
                <label for="numage" class="form-label">
                  Age
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="numage"
                  placeholder="age"
                  name="age"
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Adduser;
