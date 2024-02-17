import React, { useState } from "react";

const InputRevision = () => {
  const [array, setArray] = useState([]);
  const [store, setStore] = useState("Default Text");

  function handleClick() {
    setArray([...array, store]);
    console.log(array);
  }
  return (
    <div>
      {array.map((item, index) => (
        <p key={index}>{item} </p>
      ))}
      <input
        onChange={(e) => {
          setStore(e.target.value);
        }}
        className="border rounded"
        type="text"
        placeholder="Input text"
      />
      <button onClick={handleClick} className="rounded ">
        Click Me
      </button>
    </div>
  );
};

export default InputRevision;
