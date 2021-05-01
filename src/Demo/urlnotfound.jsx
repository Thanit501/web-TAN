import React from "react";
import pic from "../Image/404.svg";
import "../Demo/urlnotfound.css";

const urlnotfound = () => {
  return (
    <div>
      <div className="wrapper">
        <img src={pic} alt="404 img" />
        <h1>404 Page Not Found</h1>
      </div>
    </div>
  );
};
export default urlnotfound;
