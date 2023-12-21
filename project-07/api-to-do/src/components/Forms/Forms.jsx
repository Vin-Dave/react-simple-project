import styles from "./Forms.module.css";

import { Button } from "../Button/Button";
import { getTodayDate } from "../../utils/checkDate";
import { PopupNotification } from "../Popup/PopupNotification/PopupNotification";
import { useState } from "react";

export function Forms({ addNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [popupMessages, setPopupMessages] = useState([]);

  const addTask = () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const trimmedEndDate = endDate.trim();
    console.log(trimmedTitle);
    if (trimmedTitle && trimmedDescription && trimmedEndDate) {
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
      setEndDate("");
    } else {
      setPopupMessages((prevMessages) => [
        ...prevMessages,
        "Please fill in all fields",
      ]);
    }
  };

  const chceckInputData = (e) => {
    if (e.target.value >= getTodayDate()) {
      setEndDate(e.target.value);
    } else {
      setPopupMessages((prevMessages) => [
        ...prevMessages,
        "Can't add a task with a date later than the current date",
      ]);
    }
  };

  const handleClosePopup = (index) => {
    setPopupMessages((prevMessages) =>
      prevMessages.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <h1>API to Do App</h1>
      <div className={styles.form}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="date" value={endDate} onChange={chceckInputData} />
        <Button onClick={addTask}>Add Tasks</Button>
        {popupMessages.map((message, index) => (
          <PopupNotification
            key={index}
            message={message}
            onClose={() => handleClosePopup(index)}
          />
        ))}
      </div>
    </>
  );
}
