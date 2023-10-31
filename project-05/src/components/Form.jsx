import { useState } from "react";

export default function Form({ addTask, data }) {
  const [text, setText] = useState("");
  const [option, setOption] = useState("");
  const num = Array.from({ length: 20 }, (_, i) => i + 1).map((choise) => (
    <option key={choise} value={choise}>
      {choise}
    </option>
  ));

  const handleChangeText = (e) => {
    const text = e.target.value;
    setText(text);
  };
  const handleChangeOption = (e) => {
    const option = Number(e.target.value);
    setOption(option);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    if (text === "") return;
    const newItem = {
      id: Date.now(),
      description: text,
      quantity: option,
      packed: false,
    };
    console.log(newItem);

    // const tempIntialItems = [...data];
    // tempIntialItems.push(newItem);

    addTask(newItem);
    setOption(1);
    setText("");
  };

  return (
    <form onSubmit={handleAddTask} className="add-form">
      <select value={option} onChange={handleChangeOption}>
        {num}
      </select>
      <input
        value={text}
        onChange={handleChangeText}
        type="text"
        placeholder="wpisz zadanie"
      ></input>
      <button>ADD</button>
    </form>
  );
}
