/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
export default function About() {
  return (
    <div>
      <div className="container">
        <div className="about">
          <div className="image col-md-6">
            <img src="assets/1.jpg" alt="image" />
          </div>
          <div className="items col-md-6">
            <h2> Who We Are? </h2>
            <p>
              {" "}
              We have been operating for over 30 years and are Members of The
              Federation of Master Builders. We work on projects big and small
              from small residential extensions to full house. We are so happy
              with this theme. Everyday it make our lives better.{" "}
            </p>
            <ul>
              <li>We care about environment.</li>
              <li>We are trusted by hundreds of clients.</li>
              <li>Social media loves us!</li>
              <li>This list is super easy to create.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
