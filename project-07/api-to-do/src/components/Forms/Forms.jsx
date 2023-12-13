import { Button } from "../Button/Button";
import styles from "./Forms.module.css";

import { useState } from "react";

export function Forms({ addNewTask }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [endDate, setEndDate] = useState("");

	const addTask = () => {
		if (title && description && endDate) {
			const newTask = { id: endDate, title, description, done: false };
			addNewTask(newTask);
			setTitle("");
			setDescription("");
		}
	};

	return (
		<>
			<h1>API to Do App</h1>
			<div className={styles.form}>
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
				<Button onClick={addTask}>Add Tasks</Button>
			</div>
		</>
	);
}
