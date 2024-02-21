import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTask />
    </div>
  );
};
