import React, { useState } from "react";

const Todo = () => {
  const [array, setArray] = useState([]);
  const [show, setShow] = useState("");

  //   function fetchText(e) {
  //     setShow(e.target.value);
  //   }
  function handleClick(e) {
    setArray((prev) => [...prev, show]);

    setShow("");
  }
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setArray((prev) => [...prev, show]);
      setShow("");
    }
  };
  function deleteArray(e, index) {
    let arr = [...array];
    arr.splice(index, 1);
    setArray(arr);
    console.log("arr is: ", arr);
  }

  const fetchText = (e) => {
    setShow(e.target.value);
  };
  return (
    <div>
      {array.map((item, index) => {
        return (
          <p key={index}>
            {item}
            <button onClick={(e) => deleteArray(e, index)}>delete</button>
            <br />
          </p>
        );
      })}
      <br />
      <input
        // onChange={(e) => fetchText(e)}
        onChange={fetchText}
        className="rounded"
        type="text"
        placeholder="Input"
        value={show}
        onKeyDown={handleEnter}
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Todo;
