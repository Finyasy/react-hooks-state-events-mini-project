import React from "react";

function Task({task,id,deleteTask}) {
  const handleClick = () => {
    deleteTask(id);
  }
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
