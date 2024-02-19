export default function TaskCard({ task, del }) {
  return (
    <li className={task.completed ? "completed" : "incomplete"}>
      <p>{task.name} </p>
      <button
        className="delete"
        onClick={() => {
          del(task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
