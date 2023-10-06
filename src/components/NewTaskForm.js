import React, { useState } from "react";

const initialState ={
  text: '',
  category: 'Code'
}

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [newTask, setNewTask] = useState(initialState)

  function onChange(e){
    setNewTask((task) => {
      return {...task, [e.target.name] : e.target.value}
    })
  }

  const categoryComponents = categories.map((category)=>{
    if(category !== 'All'){
      return <option key={category}>{category}</option>
    }
  })

  function submitHandler(e){
    e.preventDefault()
    onTaskFormSubmit(newTask)
    setNewTask(initialState)
  }

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={onChange}/>
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={onChange}>
          {categoryComponents}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
