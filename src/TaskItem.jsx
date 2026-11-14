function TaskItem({
  task,
  subtopics,
  completedSubtopics,
  isCompleted,
  onToggle,
  onSubtopicToggle,
}) {
  return (
    <li>
      <span
        onClick={onToggle}
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task}
      </span>

      <ul>
        {subtopics.map((topic) => (
          <li
            key={topic}
            onClick={() => onSubtopicToggle(topic)}
            style={{
              textDecoration: completedSubtopics.includes(topic)
                ? "line-through"
                : "none",
            }}
          >
            {topic}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default TaskItem;

// isCompleted receives true or false from App.
// true displays a line through the task.
// false displays the normal task text.
// style applies CSS directly to the list item.
// ontoggle is called Child-to-Parent communication through callback props.
