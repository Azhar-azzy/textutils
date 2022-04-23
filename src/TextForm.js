import React, { useState } from "react";

function TextForm({ heading, showAlert }) {
  const [text, setText] = useState("Your text here...");

  const handleUpperCase = () => {
    let uText = text.toUpperCase();
    setText(uText);
    showAlert("Converted to Uppercase", "success");
  };
  const handleLowerCase = () => {
    let uText = text.toLowerCase();
    setText(uText);
    showAlert("Converted to Lowercase", "success");
  };
  const handleClearText = () => {
    let uText = "";
    setText(uText);
    showAlert("Text cleared", "success");
  };

  return (
    <>
      <div className="container">
        <div className="form-group mt-4">
          <h1>{heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Upper Case
        </button>
        <button className="btn btn-primary ml-2" onClick={handleLowerCase}>
          Lower Case
        </button>
        <button className="btn btn-secondary ml-2" onClick={handleClearText}>
          Clear
        </button>
      </div>
      <div className="container my-5">
        <h3>Your text summary</h3>
        <p>
          {text.length > 0 ? text.trim().split(" ").length : 0} Words and{" "}
          {text.length} Characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
