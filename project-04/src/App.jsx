import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='container'>
			<Header />
			<div className='content'>
				<Sidebar />
				{/* <HotelView /> */}
			</div>
		</div>
	);
}

export default App;
