import { useState } from "react";
import "./AddTask.css";

export default function AddTask() {
  const [taskValue, setTaskValue] = useState("");
  return (
    <section className="addtask">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: false,
          };
          console.log(task);
          setTaskValue("");
        }}
      >
        {/* <label htmlFor="task">Task Name :</label> */}
        <input
          type="text"
          onChange={(e) => {
            setTaskValue(e.target.value);
          }}
          name="task"
          id="task"
          value={taskValue}
          placeholder="Enter Task Here..."
          autoComplete="off"
          required
        />
        <button type="submit">Add Task</button>
        <span className="reset" onClick={() => setTaskValue("")}>
          Reset
        </span>
      </form>
    </section>
  );
}
