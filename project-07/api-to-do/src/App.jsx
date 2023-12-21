import "./App.css";
import { useState } from "react";
import { Forms } from "./components/Forms/Forms";
import { ListTasks } from "./components/ListTasks/ListTasks";
import { Popup } from "./components/Popup/Popup";
function App() {
  const [tasks, setTasks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addNewTask = (todo) => {
    setTasks([...tasks, todo]);
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setCurrentTask(taskToEdit);
    setIsPopupOpen(true);
  };
  console.log(currentTask);
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          return { ...task, done: true };
        }
      })
    );
  };

  return (
    <div className="App">
      {isPopupOpen ? (
        <Popup
          setIsPopupOpen={setIsPopupOpen}
          currentTask={currentTask}
          setTasks={setTasks}
        />
      ) : null}
      <Forms addNewTask={addNewTask} />
      <ListTasks
        tasks={tasks}
        removeTask={removeTask}
        doneTask={doneTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
