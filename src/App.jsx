import { useState } from "react";
import TaskItem from "./TaskItem";
function App() {
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
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
      <button
        onClick={() => {
          if (newTask.trim() === "") return;

          setTasks([...tasks, newTask]);
          setNewTask("");
        }}
      >
        Add Task
      </button>
      <p>Track my progress as I learn React.</p>
      <ul>
        {tasks.map((task) => (
          // <li key={task}>{task}</l>       instead of this, we create taskItem component and use it here
          <TaskItem
            key={task}
            task={task}
            isCompleted={completedTasks.includes(task)}
            onToggle={() => {
              if (completedTasks.includes(task)) {
                setCompletedTasks(
                  completedTasks.filter((item) => item !== task),
                );
              } else {
                setCompletedTasks([...completedTasks, task]);
              }
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
