import React from "react";

function NewTaskForm({selectCategories, tasks, onTaskFormSubmit, newTask, setNewTask, newCategory, setNewCategory}) {
    
  function handleSelect(e) {
    setNewCategory(e.target.value)
  }

  function handleItemName(e) {
    setNewTask(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // debugger
    const newTaskItem = {text: newTask, category: newCategory}
    const updatedTasks = [...tasks, newTaskItem]
    onTaskFormSubmit(updatedTasks)
    setNewTask('')
    setNewCategory('Code')  
    console.log("updatedTasks:", updatedTasks);  
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleItemName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelect}>
          {/* render <option> elements for each category here */}
          {selectCategories.map((selection, index) => {
            return <option key={index}>{selection}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;