import React, { useEffect, useState } from "react";
import TaskItem from "./componants/TaskItem";
import "./App.css";


function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    const targetName = event.target.name;
    const targetValue =
      targetName === "completed" ? event.target.checked : event.target.value;

    setFormState({
      ...formState,
      [targetName]: targetValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setTasks([
      ...tasks, formState
    ]);

    setFormState({
      task: "", // string
      completed: false, // boolean
      taskAssignedTo: "", // string
    })
  }
  function handleDelete(index) {
    const updatedArray = [...tasks];
    updatedArray.splice(index, 1);
    setTasks(updatedArray);
  }

  function handleToggle(index) {
    const updatedArray = [...tasks];
    updatedArray[index].completed = !updatedArray[index].completed
    setTasks(updatedArray);

  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" onChange={handleChange} value={formState.task} />
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange} checked={formState.completed} />
          </label>
          <select name="taskAssignedTo" onChange={handleChange} value={formState.taskAssignedTo}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem item={item} key={index} handleDelete={() => handleDelete(index)} handleToggle={() => handleToggle(index)} />
      ))}
    </>
  );
}

export default App;
