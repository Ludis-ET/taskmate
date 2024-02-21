import { useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import "./App.css";

export const App = () => {
  const [taskList, setTaskList] = useState([
    { id: 10001, name: "TASK A", time: "2:09:01 AM 9/14/2030" },
    { id: 10002, name: "TASK B", time: "2:09:01 AM 9/14/2030" },
    { id: 10003, name: "TASK C", time: "2:09:01 AM 9/14/2030" },
  ]);
  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
