import { useState } from "react";

export default function PackingList({ checkTask, data, deleteTask }) {
  return (
    <div className="list ">
      <ul>
        {data.map((item) => (
          <Item key={item.id} item={item} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, deleteTask }) {
  const [checkTask, setCheckTask] = useState(false);
  const handleChangeBox = () => {
    setCheckTask((s) => (s = !s));
  };
  return (
    <li>
      <input
        checked={checkTask}
        onChange={handleChangeBox}
        type="checkbox"
      ></input>
      <span style={checkTask ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteTask(item.id)}>❌</button>
    </li>
  );
}
