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

  const handleAddTask = (task) => {
    setData((item) => (item = [...data, task]));
  };

  const handleDeleteTask = (id) => {
    setData((item) => item.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form addTask={handleAddTask} data={data} />
      <PackingList deleteTask={handleDeleteTask} data={data} />
      <Stats />
    </div>
  );
}

export default App;
