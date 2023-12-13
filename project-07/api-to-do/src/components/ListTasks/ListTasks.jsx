import styles from "./ListTasks.module.css";
import { useState, useEffect } from "react";
export function ListTasks({ tasks }) {
	const calculateDaysLeft = (deadlineTimestamp) => {
		const currentDate = new Date();
		const deadlineDate = new Date(deadlineTimestamp);
		const timeDifference = deadlineDate.getTime() - currentDate.getTime();
		const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

		return daysLeft;
	};

	console.log(tasks);
	return (
		<div className={styles.tasks}>
			{tasks.map((task) => (
				<div key={task.id} className={styles.task}>
					<span
						className={styles.timeLeft}>{`Czas pozostały: ${calculateDaysLeft(
						task.id
					)} dni`}</span>
					<button className={styles.editBtn}>📜</button>
					<div className={styles.taskHeader}>
						<h2>{task.title}</h2>
					</div>

					<p className={styles.description}>{task.description}</p>

					<div className={styles.taskFooter}>
						<button
							disabled={task.done}
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
	);
}
