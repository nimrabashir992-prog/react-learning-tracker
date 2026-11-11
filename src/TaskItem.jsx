function TaskItem({ task, isCompleted, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={{
        textDecoration: isCompleted ? "line-through" : "none",
      }}
    >
      {task}
    </li>
  );
}

export default TaskItem;

// isCompleted receives true or false from App.
// true displays a line through the task.
// false displays the normal task text.
// style applies CSS directly to the list item.
