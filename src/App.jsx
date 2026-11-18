import "./App.css";
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
  const totalSubtopics = tasks.reduce(
    (total, task) => total + task.subtopics.length,
    0,
  );
  const completedSubtopicsCount = completedSubtopics.length;
  const pendingSubtopicsCount = totalSubtopics - completedSubtopicsCount;
  const progressPercentage =
    totalSubtopics === 0
      ? 0
      : Math.round((completedSubtopicsCount / totalSubtopics) * 100);
  return (
    <div className="app">
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
      <p>Track my React learning journey and monitor my progress.</p>{" "}
      <section className="dashboard">
        <h2>Learning Progress Dashboard</h2>

        <div className="stat-card">
          <h3>Total Subtopics</h3>
          <p>{totalSubtopics}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Subtopics</h3>
          <p>{completedSubtopicsCount}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Subtopics</h3>
          <p>{pendingSubtopicsCount}</p>
        </div>
        <div className="stat-card">
          <h3>Overall Progress</h3>
          <p>{progressPercentage}%</p>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </section>
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
