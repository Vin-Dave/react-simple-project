import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Appt from "./newTast/Appt";
import { initialItems } from "./components/_DATA";

function App() {
  const [data, setData] = useState(initialItems);
  const [checkTask, setCheckTask] = useState(true);

  const handleAddTask = (task) => {
    setData((item) => (item = [...data, task]));
  };

  const handleDeleteTask = (id) => {
    setData((item) => item.filter((item) => item.id !== id));
  };

  const handleChangeBox = () => {
    setCheckTask((s) => (s = !s));
  };
  return (
    <div className="app">
      <Logo />
      <Form addTask={handleAddTask} data={data} />
      <PackingList
        deleteTask={handleDeleteTask}
        data={data}
        changeBox={handleChangeBox}
        checkTask={checkTask}
      />
      <Stats />
    </div>
  );
}

export default App;
