import React from "react";

export function Form() {
  return (
    <div className="formNameAndSiteKnowledge">
      <h1>Please fill out this brief form!</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/bobonlanbusiness@gmail.com"
        method="POST"
        className="custom-form"
      >
        <div className="form-section">
          <fieldset>
            <label className="form-label">
              First Name
              <input type="text" name="FirstName" placeholder="John" required />
            </label>
            <label className="form-label">
              Middle Name
              <input type="text" name="MiddleName" placeholder="Fitzgerald" />
            </label>
            <label className="form-label">
              Last Name
              <input
                type="text"
                name="LastName"
                placeholder="Kennedy"
                required
              />
            </label>
          </fieldset>
        </div>
        <div className="form-section">
          <fieldset>
            <label className="form-label" htmlFor="siteKnowledge">
              How did you hear about the site?
              <input
                type="text"
                name="siteKnowledge"
                className="siteKnowledge"
                required
              />
            </label>
            <label className="form-label" htmlFor="box">
              <input type="checkbox" name="box" id="box" className="box" />
              Will you check the box?
            </label>
          </fieldset>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
