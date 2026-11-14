import { useState } from "react";
import TaskItem from "./TaskItem";
function App() {
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completedSubtopics, setCompletedSubtopics] = useState([]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "React.js",
      subtopics: ["Components", "Props", "useState"],
    },
    {
      id: 2,
      title: "TypeScript",
      subtopics: ["Basic Types", "Interfaces"],
    },
    {
      id: 3,
      title: "Next.js",
      subtopics: ["App Router", "Pages and Layouts"],
    },
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

          setTasks([
            ...tasks,
            {
              id: Date.now(),
              title: newTask.trim(),
              subtopics: [],
            },
          ]);
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
            key={task.id}
            task={task.title}
            subtopics={task.subtopics}
            completedSubtopics={completedSubtopics}
            onSubtopicToggle={(topic) => {
              if (completedSubtopics.includes(topic)) {
                setCompletedSubtopics(
                  completedSubtopics.filter((item) => item !== topic),
                );
              } else {
                setCompletedSubtopics([...completedSubtopics, topic]);
              }
            }}
            isCompleted={completedTasks.includes(task.title)}
            onToggle={() => {
              if (completedTasks.includes(task.title)) {
                setCompletedTasks(
                  completedTasks.filter((item) => item !== task.title),
                );
              } else {
                setCompletedTasks([...completedTasks, task.title]);
              }
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
