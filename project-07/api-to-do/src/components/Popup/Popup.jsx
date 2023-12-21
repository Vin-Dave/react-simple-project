import { useEffect, useState } from "react";

import styles from "./Popup.module.css";

export const Popup = ({ currentTask, setTasks, setIsPopupOpen }) => {
  const [editedTask, setEditedTask] = useState({ ...currentTask });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  useEffect(() => {
    setEditedTask({ ...currentTask });
  }, [currentTask]);

  const handleSaveButton = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editedTask.id ? { ...editedTask } : task
      )
    );

    setIsPopupOpen(false);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.popupOverlay}>
        <div className={styles.popup}>
          <h2>Edit Task</h2>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveButton} className={styles.save}>
            Save
          </button>
          <button
            onClick={() => setIsPopupOpen(false)}
            className={styles.cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
