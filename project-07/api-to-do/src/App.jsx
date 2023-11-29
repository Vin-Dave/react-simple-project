import "./App.css";
import { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [endDate, setEndDate] = useState("");

	const addTask = () => {
		if (title && description) {
			const newTask = { id: Date.now(), title, description };
			setTasks([...tasks, newTask]);
			setTitle("");
			setDescription("");
		}
	};

	const removeTask = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};

	return (
		<div className='App'>
			<h1>API to Do App</h1>
			<div className='form'>
				<label>Title:</label>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Description:</label>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<input
					type='date'
					value={endDate}
					onChange={(e) => setEndDate(e.target.value)}
				/>
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className='tasks'>
				{tasks.map((task) => (
					<div key={task.id} className='task'>
						<span className='time-left'>Czas pozostały: 3 dni</span>
						<button className='edit-btn'>📜</button>
						<div className='task-header'>
							<h2>{task.title}</h2>
						</div>

						<p>{task.description}</p>

						<div className='task-footer'>
							<button
								className='list-space task-btn done'
								onClick={() => removeTask(task.id)}>
								Done
							</button>
							<button
								className='task-btn remove'
								onClick={() => removeTask(task.id)}>
								Remove
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
