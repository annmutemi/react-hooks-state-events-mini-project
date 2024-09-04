import React from "react"
import Task from "./Task"

function TaskList({ tasks, setTasks }) { 

  // handle Delete task
  function handleClick(str) {
    setTasks(tasks.filter(tasks => tasks.text !== str));    
  }

  return (
    <div className="tasks">
      {
        tasks.map((task, index) => {
          return( 
            <Task 
              key={index} 
              category={task.category} 
              text={task.text}
              handleClick={() => handleClick(task.text)}
            />
          ) 
        })
      }
    </div>
  );
}

export default TaskList;