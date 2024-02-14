import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Inputfield = () => {
  const [submit, setSubmit] = useState("This will change");
  const [input, setInput] = useState("");

  function display() {
    setSubmit(input);
  }
  return (
    <div>
      <p>{submit}</p>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="form-control"
        type="text"
        placeholder="Input text"
        value={input}
      />
      <button onClick={display} className="btn btn-primary" type="submit">
        Submit
      </button>
    </div>
  );
};

export default Inputfield;
