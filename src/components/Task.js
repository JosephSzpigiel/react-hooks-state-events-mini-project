import React from "react";

function Task({task, onDelete, id}) {

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" value={id} onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
