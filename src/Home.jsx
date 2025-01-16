import React from "react";
export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home-page">
          <div className="col-md-12">
            <h3> Welcome to </h3>
            <h1> Family Bakery </h1>
            <p>
              {" "}
              We're the biggest, best equipped and most advanced Bakery in the
              greater Los Angeles area.
            </p>
            <button className="btn btn-outline-warning"> Learn more </button>
            <button className="btn btn-outline-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
