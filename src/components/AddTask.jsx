import { useState } from "react";
import "./AddTask.css";

export default function AddTask() {
  const [taskValue, setTaskValue] = useState("");
  return (
    <section className="addtask">
      <form>
        <label htmlFor="task">Task Name :</label>
        <input
          type="text"
          onChange={(e) => {
            setTaskValue(e.target.value);
          }}
          name="task"
          id="task"
          autoComplete="off"
          required
        />
        <button type="submit">Add Task</button>
        <span className="reset">Reset</span>
      </form>
    </section>
  );
}
