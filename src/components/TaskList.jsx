export default function TaskList() {
  const [tasks, setTask] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: true },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);
  const [show, setShow] = useState(true);

  let del = (id) => {
    setTask(tasks.filter((count) => id !== count.id));
  };
  return (
    <>
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
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
          ))}
      </ul>
    </>
  );
}
