import { useState } from "react";

export default function PackingList({
  checkTask,
  data,
  deleteTask,
  packedTask,
  clear,
}) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItemsBy;
  const handleChangeStatus = (e) => {
    const value = e.target.value;
    setSortedBy((prevValue) => (prevValue = value));
  };

  if (sortedBy === "input") sortedItemsBy = data;
  if (sortedBy === "description")
    sortedItemsBy = data
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItemsBy = data
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  //   const selectSortedBy = (e) => {
  //     if (e.target.value === "input") {
  //       console.log("inp2ut");
  //       setSortedBy((s) => (s = "input"));
  //     } else if (e.target.value === "description") {
  //       setSortedBy((s) => (s = "description"));
  //     } else if (e.target.value === "packed") {
  //       setSortedBy((s) => (s = "packed"));
  //     }
  //   };
  console.log(data);
  return (
    <>
      <div className="list ">
        <ul>
          {sortedItemsBy.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteTask={deleteTask}
              packedTask={packedTask}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortedBy} onChange={handleChangeStatus}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by input description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={clear}>Clear List</button>
        </div>
      </div>
    </>
  );
}
function Item({ item, deleteTask, packedTask }) {
  // const [checkTask, setCheckTask] = useState(false);

  // const handleChangeBox = () => {
  // 	setCheckTask((s) => (s = !s));
  // };
  return (
    <li>
      <input
        checked={item.packed}
        onChange={() => packedTask(item.id)}
        type="checkbox"
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteTask(item.id)}>❌</button>
    </li>
  );
}
