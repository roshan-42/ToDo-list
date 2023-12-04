import React, { useState } from "react";

export default function Main() {
  const [taskname, settaskname] = useState("");
  const [tasklist, settasklist] = useState([]);

  function addtask() {
    settasklist([...tasklist, taskname]);
    settaskname(""); // Clear the input field after adding a task
  }

  function deletetask(index) {
    var duparray = [...tasklist];
    duparray.splice(index, 1); // Correct usage of splice
    settasklist(duparray);
  }

  const tasklistcontent = tasklist.map((task, index) => (
    <div key={index}>
      <p>{task}</p>
      <i className="fa-solid fa-trash" onClick={() => deletetask(index)}></i>
    </div>
  ));

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Enter Task "
            className="form-control"
            value={taskname}
            onChange={(e) => {
              settaskname(e.target.value);
            }}
          />
          <button className="btn btn-success" onClick={addtask}>
            Add
          </button>
          <br />
          {tasklistcontent}
        </div>
      </div>
    </div>
  );
}
