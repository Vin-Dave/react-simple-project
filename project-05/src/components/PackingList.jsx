import { useState } from "react";

export default function PackingList({
	checkTask,
	data,
	deleteTask,
	packedTask,
}) {
	return (
		<div className='list '>
			<ul>
				{data.map((item) => (
					<Item
						key={item.id}
						item={item}
						deleteTask={deleteTask}
						packedTask={packedTask}
					/>
				))}
			</ul>
		</div>
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
				type='checkbox'></input>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => deleteTask(item.id)}>❌</button>
		</li>
	);
}
