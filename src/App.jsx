import { useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import "./App.css";

export const App = () => {
  const [taskList, setTaskList] = useState("");
  return (
    <div className="App">
      <Header />
      <AddTask task={setTaskList} />
      <ShowTask task={task} />
    </div>
  );
};
