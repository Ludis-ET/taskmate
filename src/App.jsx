import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTask] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);
  const [show, setShow] = useState(true);

  let del = (id) => {
    setTask(tasks.filter((count) => id !== count.id));
  };

  return (
    <>
      <div className="App">
        <ul>
          <button className="trigger" onClick={() => setShow(!show)}>
            Toggle
          </button>
          {show &&
            tasks.map((count) => (
              <li key={count.id}>
                <p>{count.name} </p>
                <button
                  className="delete"
                  onClick={() => {
                    del(count.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
