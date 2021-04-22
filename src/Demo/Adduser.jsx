import React from "react";
import react, { useState } from "react";
import Navbar from "../Demo/Navbar";
import Axios from "axios";

const Adduser = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    term: "",
    age: "",
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit value", input);
  };

  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-center">Add Users</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={onSubmit}>
              <div class="mb-3">
                <label for="txtfirstname" class="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="txtfirstname"
                  placeholder="firstname"
                  name="firstname"
                  onChange={handleChange}
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
                  name="lastname"
                  onChange={handleChange}
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
                    name="term"
                    id="flexRadioDefault1"
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Female
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="term"
                    id="flexRadioDefault2"
                    onChange={handleChange}
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
                  onChange={handleChange}
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
