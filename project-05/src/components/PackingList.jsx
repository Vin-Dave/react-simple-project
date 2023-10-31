export default function PackingList({
  checkTask,
  data,
  deleteTask,
  handleChangeBox,
}) {
  return (
    <div className="list ">
      <ul>
        {data.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteTask={deleteTask}
            handleChangeBox={handleChangeBox}
            checkTask={checkTask}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, deleteTask, handleChangeBox, checkTask }) {
  return (
    <li>
      <input
        value={checkTask}
        onChange={handleChangeBox}
        type="checkbox"
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteTask(item.id)}>❌</button>
    </li>
  );
}
