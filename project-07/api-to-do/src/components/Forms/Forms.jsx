import { Button } from "../Button/Button";
import styles from "./Forms.module.css";
import { getTodayDate } from "../../utils/checkDate";
import { useState } from "react";

export function Forms({ addNewTask }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [endDate, setEndDate] = useState("");

	const addTask = () => {
		if (title && description && endDate) {
			const newTask = {
				id: Number(new Date()),
				endDate,
				title,
				description,
				done: false,
			};
			addNewTask(newTask);
			setTitle("");
			setDescription("");
		}
	};

	const chceckInputData = (e) => {
		if (e.target.value >= getTodayDate()) {
			setEndDate(e.target.value);
		} else {
			alert("Can't add a task with a date later than the current date ");
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

				<input type='date' value={endDate} onChange={chceckInputData} />
				<Button onClick={addTask}>Add Tasks</Button>
			</div>
		</>
	);
}
