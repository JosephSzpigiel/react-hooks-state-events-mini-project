import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, setTasks, selectedCategory}) {

  function onDelete(e){
    setTasks((currentTasks) => currentTasks.filter((task)=>{
      if (tasks.indexOf(task) === parseInt(e.target.value)){
        return false
      }else{ return true }
    }))
  }
const filteredTasks = tasks.filter((task)=>{
  if(selectedCategory === "All"){
    return true
  }else if (task.category === selectedCategory){
    return true
  }else {
    return false
  }
})

  const taskComponents = filteredTasks.map((task)=>{
    return <Task task={task} key={tasks.indexOf(task)} id={tasks.indexOf(task)} onDelete= {onDelete}/>
  })

  return (
    <div className="tasks">
      {taskComponents}
    </div>
  );
}

export default TaskList;
