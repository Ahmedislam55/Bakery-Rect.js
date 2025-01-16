/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
export default function Bolg() {
  return (
    <div className="container blog">
      <h2 className="text-center">Our Location</h2>
      <p className="text-center">
        {" "}
        Learn more about them. We have worked truly hard to make them perfect
        for every use.
      </p>
      <div className="images">
        <div className="image col-md-4">
          <img src="assets/3.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="image col-md-4">
          <img src="assets/4.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="image col-md-4">
          <img src="assets/2.jpg" alt="image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
