import React, { useState } from "react";

const Buttonclick = () => {
  const [text, setText] = useState("This text should be changed");
  function Change() {
    setText("the text is Changed");
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={Change}>Click Me</button>
    </div>
  );
};

export default Buttonclick;
