import { useState } from "react";
import "./App.css";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: true },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Passports2", quantity: 112, packed: true },
	{ id: 4, description: "Socks1", quantity: 122, packed: false },
];

function App() {
	const [data, setData] = useState(initialItems);
	return (
		<div className='app'>
			<Logo />
			<Form setData={setData} />
			<PackingList data={data} />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>Logo</h1>;
}
function Form({ setData }) {
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
		const newItem = {
			id: Date.now(),
			description: text,
			quantity: option,
			packed: false,
		};
		console.log(newItem);

		const tempIntialItems = [...initialItems];
		tempIntialItems.push(newItem);

		setData(tempIntialItems);
	};

	return (
		<form onSubmit={handleAddTask} className='add-form'>
			<select value={option} onChange={handleChangeOption}>
				{num}
			</select>
			<input
				value={text}
				onChange={handleChangeText}
				type='text'
				placeholder='wpisz zadanie'></input>
			<button>ADD</button>
		</form>
	);
}

function PackingList({ data }) {
	return (
		<div className='list '>
			<ul>
				{data.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	);
}

function Stats() {
	return (
		<footer className='stats'>
			<p>You have x items on your list </p>
		</footer>
	);
}

export default App;
