import React from "react";
export default function Contact() {
  return (
    <div className="container mt-5 contact">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
