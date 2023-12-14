import styles from "./Popup.module.css";

export const Popup = ({ task, onClose }) => {
	return (
		<div className={styles.appContainer}>
			<div className={styles.popupOverlay}>
				<div className={styles.popup}>
					<h2>Edit Task</h2>
					<label>Title:</label>
					<input type='text' />
					<label>Description:</label>
					<textarea />
					<button className={styles.save}>Save</button>
					<button className={styles.cancel}>Cancel</button>
				</div>
			</div>
		</div>
	);
};
