import "./AddTask.css";

export default function AddTask() {
  return (
    <section className="addtask">
      <form>
        <label htmlFor="task">Task Name</label>
        <input type="text" onChange={() => {console.log(event)}} name="task" id="task" required />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}
