import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Appt from "./newTast/Appt";

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
			<Form setData={setData} data={data} />
			<PackingList data={data} />
			<Stats />
		</div>
	);
}

export default App;
