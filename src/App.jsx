function App() {
  const tasks = ["Learn React.js", "Learn TypeScript", "Learn Next.js"];
  return (
    <div>
      <h1>React Learning Tracker</h1>
      <p>Track my progress as I learn React.</p>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
