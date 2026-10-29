import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault();

    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(item =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter(item => item.id !== id));
  }

  return (
    <div style={{
      fontFamily: "Arial",
      maxWidth: "500px",
      margin: "30px auto",
      padding: "20px"
    }}>

      <h1>My To-Do List</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: "8px", width: "65%" }}
        />
        {" "}
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map(item => (
            <li key={item.id} style={{ margin: "12px 0" }}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTask(item.id)}
              />
              {" "}
              <span style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none"
              }}>
                {item.text}
              </span>
              {" "}
              <button onClick={() => deleteTask(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <p>Total Tasks: {tasks.length}</p>
      <p>
        Completed: {tasks.filter(item => item.completed).length}
      </p>

    </div>
  );
}

export default App;

