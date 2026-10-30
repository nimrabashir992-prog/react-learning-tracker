import { useState } from "react";
import TaskItem from "./TaskItem";
function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    "Learn React.js",
    "Learn TypeScript",
    "Learn Next.js",
  ]);
  return (
    <div>
      <h1>React Learning Tracker</h1>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Enter a new learning task"
      />
      <button onClick={() => console.log("Add Task button clicked")}>
        Add Task
      </button>
      <p>Track my progress as I learn React.</p>
      <ul>
        {tasks.map((task) => (
          // <li key={task}>{task}</li>       instead of this, we create taskItem component and use it here
          <TaskItem key={task} oneTask={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
