import React from "react";

import "../../index.css";
import "./Form.css";

export default function Form() {
  return (
    <div className="contact-container container-fluid d-flex flex-column justify-content-center align-items-center">
      <h2 className="contact-title-1">Contact</h2>
      <h3 className="contact-title-2 text-center">
        Leave us your information so we can contact you
      </h3>
      <form
        className="container-fluid m-0 p-3"
        action="https://formspree.io/f/mrbgvwbn"
        method="POST"
      >
        <div className="row justify-content-center g-1 g-sm-4">
          <div className="col-12 col-sm-6 col-lg-5">
            <label htmlFor="inputName" class="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-label="First name"
              required
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-5">
            <label htmlFor="inputEmail" class="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="col-12 col-lg-10">
            <label htmlFor="inputMessage" class="form-label">
              Message
            </label>
            <textarea
              className="p-4 form-control"
              id="inputMessage"
              rows="10"
              required
            />
          </div>
          <div class="col-12 col-lg-10">
            <button type="submit" class="btn btn-secondary btn-submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
