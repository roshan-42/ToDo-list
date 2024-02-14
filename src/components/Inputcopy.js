import React, { useState } from "react";

const Inputcopy = () => {
  const [savetext, setSavetext] = useState("");
  const [buttonclicked, setButtonclicked] = useState("");

  return (
    <div>
      <p>{buttonclicked}</p>
      <input
        onChange={(e) => {
          setSavetext(e.target.value);
        }}
        type="text"
        placeholder="Enter Text"
      />
      <button
        onClick={() => {
          setButtonclicked(savetext);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Inputcopy;
