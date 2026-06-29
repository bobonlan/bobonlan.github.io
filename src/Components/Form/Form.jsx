import React from "react";

export function Form() {
  return (
    <div className="page-content">
      <p className="about-prompt">// contact</p>
      <h1>Get in touch</h1>
      <p style={{ marginTop: "0.5rem", marginBottom: "2rem" }}>
        Fill out the form and it'll land in my inbox.
      </p>

      <form
        target="_blank"
        action="https://formsubmit.co/bobonlanbusiness@gmail.com"
        method="POST"
        className="custom-form"
      >
        <div className="form-section">
          <fieldset style={{ border: "none", padding: 0 }}>
            <label className="form-label">
              First Name
              <input type="text" name="FirstName" placeholder="Jesus" required />
            </label>
            <label className="form-label" style={{ marginTop: "0.75rem", display: "block" }}>
              Middle Name
              <input type="text" name="MiddleName" placeholder="H." />
            </label>
            <label className="form-label" style={{ marginTop: "0.75rem", display: "block" }}>
              Last Name
              <input type="text" name="LastName" placeholder="Christ" required />
            </label>
          </fieldset>
        </div>

        <div className="form-section">
          <fieldset style={{ border: "none", padding: 0 }}>
            <label className="form-label">
              Email Address
              <input type="text" name="siteKnowledge" placeholder="jesushchrist@google.com" required />
            </label>
            <label className="form-label">
              What are you contacting about?
              <input type="text" name="siteKnowledge" required />
            </label>
            <label className="form-label">
              How did you hear about the site?
              <input type="text" name="siteKnowledge" required />
            </label>
            {/*<label className="form-label" style={{ marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem", flexDirection: "row" }}>
              <input type="checkbox" name="box" id="box" style={{ width: "auto" }} />
              Will you check the box?
            </label>*/}
          </fieldset>
        </div>

        <button type="submit" className="basicButton" style={{ marginTop: "0.5rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}