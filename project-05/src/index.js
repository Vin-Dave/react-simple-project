import React, { Component, PureComponent, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Appt from "./newTast/Appt";

// class Apps extends PureComponent {
// 	state = {
// 		value: simpleObj.value,
// 		handleToggleClickLogged: simpleObj.handleToggleClick,
// 	};
// 	handleToggleClickLogged = () => {
// 		console.log("d");
// 	};
// 	render() {
// 		return (
// 			<>
// 				<AppContext.Provider
// 					value={{
// 						value: this.state.value,
// 						handleToggleClick: this.state.handleToggleClickLogged,
// 					}}>
// 					<Paragraf />
// 					<Button />
// 				</AppContext.Provider>
// 			</>
// 		);
// 	}
// }

// class Button extends PureComponent {
// 	render() {
// 		return (
// 			<>
// 				<AppContext.Consumer>
// 					{({ handleToggleClickLogged }) => (
// 						<button onClick={handleToggleClickLogged}>Change</button>
// 					)}
// 				</AppContext.Consumer>
// 			</>
// 		);
// 	}
// }
// class Paragraf extends PureComponent {
// 	render() {
// 		return (
// 			<>
// 				<AppContext.Consumer>
// 					{(props) => (
// 						<h1>
// 							Uzytkownik jest:{props.value ? "Zalogowany" : "Niezalogowany"}
// 						</h1>
// 					)}
// 				</AppContext.Consumer>
// 			</>
// 		);
// 	}
// }

// const simpleObj = {
// 	value: false,
// 	handleToggleClick: () => {
// 		console.log("domyślny provider");
// 	},
// };
// const AppContext = createContext(simpleObj);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Appt /> */}
    {/* <Apps /> */}
  </React.StrictMode>
);
