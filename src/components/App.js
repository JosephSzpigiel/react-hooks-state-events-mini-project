import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [tasks, setTasks] = useState(TASKS)

  function selectHandler(e){
    setSelectedCategory(e.target.textContent)
  }

  function onTaskFormSubmit(taskObj){
    setTasks((tasks) => [...tasks, taskObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelect={selectHandler}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
