import "./App.css";
import { useState } from "react";
import { Forms } from "./components/Forms/Forms";
import { ListTasks } from "./components/ListTasks/ListTasks";

function App() {
	const [tasks, setTasks] = useState([]);

	const addNewTask = (todo) => {
		setTasks([...tasks, todo]);
	};

	return (
		<div className='App'>
			<Forms addNewTask={addNewTask} />
			<ListTasks tasks={tasks} />
		</div>
	);
}

export default App;
