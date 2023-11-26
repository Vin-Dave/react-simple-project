export default function Stats({ data }) {
  if (data.length === 0) return <p className="stats">Add new task 📋</p>;
  const itemList = data.length;
  const itemPacked = data.filter((task) => task.packed).length;
  const totalProcent = Math.round((itemPacked / itemList) * 100);

  const message =
    totalProcent === 100 ? (
      <p>You done all task</p>
    ) : (
      <p>
        {" "}
        You have {itemList}items on your list,and you already packed{" "}
        {itemPacked} as {totalProcent}%
      </p>
    );

  return <footer className="stats">{message}</footer>;
}
