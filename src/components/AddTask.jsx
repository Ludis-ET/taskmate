export const AddTask = ({ taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const data = {
      id: taskList.length + 1,
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} , ${date.toLocaleDateString()}`,
    };
    setTaskList([...taskList, data]);
    e.target.task.value = "";
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
