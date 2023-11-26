import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Apps from "./Apps";
import App1 from "./App1";
import PersonArray from "./PersonArray";

const data = {
	users: [
		{
			id: 1,
			age: 19,
			name: "Tomasz",
			sex: "male",
		},
		{
			id: 2,
			age: 19,
			name: "Tomasz",
			sex: "male",
		},
		{
			id: 3,
			age: 19,
			name: "Tomasz",
			sex: "male",
		},
		{
			id: 4,
			age: 19,
			name: "Tomasz1",
			sex: "male",
		},
	],
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <Apps /> */}
		{/* <App1 /> */}
		<PersonArray data={data} />
	</React.StrictMode>
);
