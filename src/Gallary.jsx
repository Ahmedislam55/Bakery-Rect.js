/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Gallary() {
  return (
    <div>
      <div className="container">
        <div className="about">
          <div className="items col-md-6">
            <h2> Our Location </h2>
            <p>
              {" "}
              We have been operating for over 30 years and are Members of The
              Federation of Master Builders. We work on projects big and small
              from small residential extensions to full house. We are so happy
              with this theme. Everyday it make our lives better.{" "}
            </p>
            <p>
              {" "}
              Story on projects big and small from small residential extensions
              to full house. We are so happy with this theme. Everyday it make
              our lives better.{" "}
            </p>
          </div>
          <div className="image col-md-6">
            <img src="assets/2.jpg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
